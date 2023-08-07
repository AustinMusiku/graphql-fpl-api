FROM node:alpine AS builder

WORKDIR /usr/src/fplfriendapi

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:alpine

COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile && yarn global add pm2

COPY /public ./public
COPY ecosystem.config.js ./

COPY --from=builder /usr/src/fplfriendapi/dist ./dist

EXPOSE 4500

CMD ["yarn", "start:pm2"]