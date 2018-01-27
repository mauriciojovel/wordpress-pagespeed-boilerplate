FROM wernight/alpine-nginx-pagespeed

#Create custom directory
RUN mkdir /etc/nginx/global
COPY nginx.conf /etc/nginx/nginx.conf
COPY wordpress.conf /etc/nginx/global/wordpress.conf
COPY restrictions.conf /etc/nginx/global/restrictions.conf
