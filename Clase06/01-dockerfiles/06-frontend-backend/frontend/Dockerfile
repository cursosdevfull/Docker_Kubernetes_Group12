FROM node:alpine3.19 as node

WORKDIR /app

COPY package*.json .

RUN npm ci


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=node /app/node_modules node_modules

COPY . .