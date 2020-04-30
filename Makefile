.DEFAULT_GOAL := help

include .env
export  $(shell sed 's/=.*//' .env)

install: ## Service Install Dependencies
	docker run -it --rm \
	--name=${PROJECT_NAME}-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	node:latest \
	npm install

compile: ## Service Compile To Production
	docker run -it --rm \
	--name=${PROJECT_NAME}-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	node:latest \
	npm run build

up: ## Run Container Production
	docker run -d --rm \
	--name=${PROJECT_NAME} \
	-p 3001:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run start

up-dev: ## Run Container Development (daemon)
	docker run -d --rm \
	--name=${PROJECT_NAME} \
	-p 3001:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run dev

up-it-dev: ## Run Container Development (iterative)
	docker run -it --rm \
	--name=${PROJECT_NAME} \
	-p 3001:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run dev

deploy: compile up ## Deploy Container Production

down: ## Down Container
	docker stop ${PROJECT_NAME}

logs: ## Show Logs Container
	docker logs ${PROJECT_NAME} --details --follow --tail="all"

help: ## Help Make's Tags
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
