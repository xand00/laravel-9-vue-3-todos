build:
	docker-compose build

copyrootenv:
	cp .env.example .env

copyenv:
	docker-compose run --rm php cp .env.example .env && \
	docker-compose run --rm frontend cp .env.example .env

install:
	docker-compose run --rm composer composer install && \
	docker-compose run --rm php php artisan storage:link && \
	docker-compose run --rm frontend npm i && \
	docker-compose run --rm frontend npm run build

migrate:
	docker-compose up -d mysql && \
	sleep 20 && \
	docker-compose run --rm php php artisan migrate

setup: copyrootenv build copyenv install migrate

up:
	docker-compose up -d

down:
	docker-compose down

composer:
	docker-compose run --rm composer sh

node:
	docker-compose run --rm node sh
