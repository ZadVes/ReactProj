FROM node:16 AS builder
WORKDIR /app


COPY package*.json ./


RUN npm install
RUN npm install react-scripts@5.0.1


COPY client ./


ENV NODE_ENV=production
WORKDIR /app/client
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf