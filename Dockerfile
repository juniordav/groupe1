FROM node:latest
WORKDIR /usr/src/app/spacex
RUN npm install -g @angular/cli 
COPY . . 