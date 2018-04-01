FROM wernight/alpine-nginx-pagespeed

# Add a non-root user to prevent files being created with root permissions on host machine.
ARG PUID=1000
ARG PGID=1000

ENV PUID ${PUID}
ENV PGID ${PGID}
RUN addgroup -g ${PGID} -S www-data && \
    adduser -u ${PUID} -S www-data -G www-data

#Create custom directory
RUN mkdir /etc/nginx/global
COPY nginx.conf /etc/nginx/nginx.conf
COPY wordpress.conf /etc/nginx/global/wordpress.conf
COPY restrictions.conf /etc/nginx/global/restrictions.conf
