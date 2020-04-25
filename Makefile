.DEFAULT_GOAL := help

include .env
export  $(shell sed 's/=.*//' .env)

install: ## Service Install Dependencies
	docker run -it \
	--name=sheldon-web-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	node:latest \
	npm install

compile: ## Service Compile To Production
	docker run -it \
	--name=sheldon-web-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	node:latest \
	npm run build

up: ## Run Container Production
	docker run -d --rm \
	--name=sheldon-web \
	-p 3000:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	node:latest \
	npm run start

up-dev: ## Run Container Development
	docker run -it --rm \
	--name=sheldon-web \
	-p 3000:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	node:latest \
	npm run dev

down: ## Down Container
	docker stop sheldon-web

logs: ## Show Logs Container
	docker logs sheldon-web --details --follow --tail="all"

help: ## Help Make's Tags
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
