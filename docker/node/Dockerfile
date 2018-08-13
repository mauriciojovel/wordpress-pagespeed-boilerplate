FROM node:alpine

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

RUN yarn global add gulp-cli
RUN mkdir /app
WORKDIR /app
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod 755 /docker-entrypoint.sh
USER node
ENTRYPOINT ["/docker-entrypoint.sh"]
