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

COPY --from=builder ./public ./public
COPY --from=builder ./dist ./dist

EXPOSE 4500

CMD ["yarn" , "start"]