FROM node:16 AS builder
WORKDIR /app

# 1. Копируем зависимости
COPY package*.json ./

# 2. Устанавливаем react-scripts и зависимости
RUN npm install
RUN npm install react-scripts@5.0.1

# 3. Копируем ВСЮ папку client (с public и src)
COPY client ./

# 4. Собираем проект (теперь public будет в правильном месте)
ENV NODE_ENV=production
WORKDIR /app/client
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf