#Build Client Application
FROM node:10.16.0 as ClientBuilder
WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install --silent
COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

RUN ls /usr/src/app/build

#Serve Client Application
FROM nginx:1.16.0
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=ClientBuilder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
