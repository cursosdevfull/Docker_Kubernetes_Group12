FROM node:alpine3.19 as base
WORKDIR /app

FROM base as dependencies-dev
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine as production
COPY --from=dependencies-dev /app/dist/app-angular/browser /usr/share/nginx/html
