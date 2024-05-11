FROM node:alpine3.18

WORKDIR /app

RUN apk add --no-cache curl

COPY package*.json .

RUN npm ci

COPY . .

CMD npm start