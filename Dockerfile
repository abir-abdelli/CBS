FROM node:latest

RUN mkdir -p /usr/src/app
RUN npm install -g npm@7.17.0


WORKDIR  /urs/src/app

COPY package.json ./

RUN npm install 
RUN apt update
RUN apt-get -qq -y install curl

COPY  . .

EXPOSE 3000

CMD ["npm", "start"]