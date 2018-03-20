FROM node:8.9
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app

RUN yarn
COPY . /src/app

EXPOSE 8080

CMD ["npm", "start"]