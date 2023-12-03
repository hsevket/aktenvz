FROM mhart/alpine-node:12 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.25.2-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]