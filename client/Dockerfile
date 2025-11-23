FROM node:16 AS builder
WORKDIR /app

# Копируем package.json именно из client/
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь клиентский код
COPY . .

# Собираем production build
RUN npm run build


# --- Stage 2: NGINX ---
FROM nginx:stable-alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем билд
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]