FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY dist/ .

RUN npm install -g ts-node

CMD ["node", "index.js"]