.DEFAULT_GOAL := help

include .env
export  $(shell sed 's/=.*//' .env)

install: ## Service Install Dependencies
	docker run -it --rm \
	--name=${PROJECT_NAME}-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm install

compile: ## Service Compile To Production
	docker run -it --rm \
	--name=${PROJECT_NAME}-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run build

up: ## Run Container Production
	docker run -d \
	--name=${PROJECT_NAME} \
	-p 3001:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run start

up-it-dev: ## Run Container Development (iterative)
	docker run -it --rm \
	--name=${PROJECT_NAME}-dev \
	-p 3001:3000 \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run dev

deploy: ## Restart Container (deploy)
	docker restart ${PROJECT_NAME}

down: ## Down Container
	docker ps -aq -f name=${PROJECT_NAME} -f status=running | xargs -r docker stop

logs: ## Show Logs Container
	docker logs ${PROJECT_NAME} --details --follow --tail="all"

help: ## Help Make's Tags
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
