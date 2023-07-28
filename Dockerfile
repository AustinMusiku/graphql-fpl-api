FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM node:alpine AS runner

WORKDIR /app

COPY package*.json ./

RUN yarn install --production

COPY --from=builder /app/dist ./dist

EXPOSE 4500

CMD ["yarn" , "start"]