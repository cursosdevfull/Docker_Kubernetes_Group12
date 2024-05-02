FROM node:alpine3.19

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["node", "index.js"]