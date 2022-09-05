build:
	docker-compose build

copyenv:
	cp .env.example .env && \
	docker-compose run --rm php cp .env.example .env && \
	docker-compose run --rm frontend cp .env.example .env

install:
	docker-compose run --rm composer composer install && \
	docker-compose run --rm frontend npm i && \
	docker-compose run --rm frontend npm run build

migrate:
	docker-compose up -d mysql && \
	docker-compose run --rm php php artisan migrate

setup: build copyenv install migrate

up:
	docker-compose up -d

down:
	docker-compose down

composer:
	docker-compose run --rm composer sh

node:
	docker-compose run --rm node sh
