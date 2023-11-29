FROM node:18.18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5183

CMD [ "npm", "run", "dev" ]