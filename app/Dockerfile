FROM node:12.19

# Install app dependencies
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY package.json /usr/src/api
 
RUN git config --global url.https://github.com/.insteadOf git://github.com/
RUN npm install
RUN npm install -g npm-check
RUN npm install -g npm-check-updates
RUN npm install --save-dev nodemon

COPY . .

EXPOSE 3000
EXPOSE 4000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start
#CMD /bin/sleep 3600