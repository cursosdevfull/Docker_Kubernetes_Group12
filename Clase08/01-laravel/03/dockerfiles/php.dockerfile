FROM php:8.2.13-fpm-alpine3.18

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql