FROM caddy:alpine

COPY ./dist /var/www/html

COPY ./Caddyfile /etc/caddy/Caddyfile
