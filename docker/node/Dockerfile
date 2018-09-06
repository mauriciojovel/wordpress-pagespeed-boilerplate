FROM node:10.9.0-alpine

RUN apk --update --no-cache \
		add  \
        bash \
        make \
        automake \
		git \
        gcc \
        musl-dev \
        openssh \
		alpine-sdk  \
		nasm  \
        libtool \
		autoconf  \
		build-base \
		zlib \
		zlib-dev \
		libpng \
		libpng-dev\
		libwebp \
		libwebp-dev \
		libjpeg-turbo \
		libjpeg-turbo-dev

RUN yarn global add gulp-cli
RUN mkdir /app
WORKDIR /app
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod 755 /docker-entrypoint.sh
USER node
ENTRYPOINT ["/docker-entrypoint.sh"]
