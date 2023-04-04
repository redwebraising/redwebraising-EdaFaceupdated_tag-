ARG NODE_VERSION

#
#--------------------------------------------------------------------------
# Install NodeJS
#--------------------------------------------------------------------------
#
FROM node:$NODE_VERSION-alpine as builder

ENV NODE_ENV=$NODE_VERSION

#
#--------------------------------------------------------------------------
# Init React Build
#--------------------------------------------------------------------------
#
WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

#
#--------------------------------------------------------------------------
# Init Nginx to serve React bundle
#--------------------------------------------------------------------------
#
FROM nginx:stable-alpine

ADD ./docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html