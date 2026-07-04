FROM alpine:latest AS multi-stage-build
WORKDIR /source
RUN apk add --no-cache git
RUN git clone https://github.com/fatawaimamalmuftin/koda-b8-React .

FROM node:24-alpine AS builder
WORKDIR /build
COPY --from=multi-stage-build /source .
RUN npm install
RUN npm run build

FROM caddy:2-alpine
COPY --from=builder /build/dist /var/www/html
COPY --from=builder /build/Caddyfile /etc/caddy/Caddyfile

EXPOSE 8085