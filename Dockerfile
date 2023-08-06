FROM node:alpine AS builder

WORKDIR /usr/src/fplfriendapi

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM node:alpine AS runner

WORKDIR /usr/src/fplfriendapi

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

RUN yarn global add pm2

COPY --from=builder ./public ./public
COPY --from=builder ./dist ./dist
COPY --from=builder ecosystem.config.js ./

EXPOSE 4500

CMD ["yarn" , "start"]