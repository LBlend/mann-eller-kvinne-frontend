FROM node:current-alpine3.12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

ENV PORT=3000 VITE_API_URL=http://localhost:5000/mann-eller-kvinne

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host", "--port", "3000"]
