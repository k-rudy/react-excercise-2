FROM node:14-alpine

USER root

ENV APP_HOME /usr/app
WORKDIR $APP_HOME

EXPOSE 3000

RUN apk update
RUN apk add -u git 

COPY package.json ./

COPY . $APP_HOME

RUN yarn build

CMD ["yarn", "start"]
