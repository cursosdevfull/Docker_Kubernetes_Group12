FROM node:alpine3.19 as base
WORKDIR /app

FROM base as dependencies
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM base as build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build

FROM base as release
COPY package.json .
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD npm run start:prod