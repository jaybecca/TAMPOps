FROM nginx:alpine

RUN apk upgrade --no-cache
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN addgroup -S tampops && adduser -S -G tampops -u 10001 tampops \
    && chown -R tampops:tampops /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d \
    && touch /run/nginx.pid && chown tampops:tampops /run/nginx.pid
USER tampops
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
