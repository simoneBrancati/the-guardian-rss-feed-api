FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /usr/src/app/.env .
COPY --from=build /usr/src/app/build ./build

CMD ["node", "build/app.js"]
