# Этап сборки
FROM node:16 AS builder
WORKDIR /app

# 1. Копируем зависимости
COPY package*.json ./

# 2. Устанавливаем зависимости (включая react-scripts)
RUN npm install

# 3. Копируем исходники клиента
COPY client ./client

# 4. Собираем проект
WORKDIR /app/client
RUN npm run build

# Этап production
FROM nginx:alpine
COPY --from=builder /app/client/build /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf