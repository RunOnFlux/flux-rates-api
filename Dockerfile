FROM node:14-alpine
MAINTAINER Influx Dev Team <info@runonflux.io>

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app

COPY . .

EXPOSE 3333

CMD [ "npm", "start" ]