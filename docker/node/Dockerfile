FROM node:alpine
RUN yarn global add gulp-cli
RUN mkdir /app
WORKDIR /app
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod 755 /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
