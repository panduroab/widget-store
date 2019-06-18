FROM node:10.16.0 AS WidgetStoreAPI
WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm install pm2 -g

ENV PATH=/usr/src/app/node_modules/.bin:$PATH
ENV SERVER_HOST=$SERVER_HOST
ENV SERVER_PORT=$SERVER_PORT
ENV CLIENT_HOST=$CLIENT_HOST
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_USER=$DB_USER
ENV DB_PASS=$DB_PASS
ENV DB_NAME=$DB_NAME

CMD ["pm2-runtime", "pm2.conf.yml"]