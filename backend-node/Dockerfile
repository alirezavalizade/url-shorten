FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

COPY yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 8000

CMD ["yarn", "start"]