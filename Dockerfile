FROM node:16-alpine

WORKDIR ./test

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","run","start"]