FROM node:current-alpine3.12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "preview", "--host", "--port", "3000"]
