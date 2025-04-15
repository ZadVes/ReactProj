FROM node:16
WORKDIR /app

# 1. Копируем зависимости
COPY package*.json ./

# 2. Устанавливаем зависимости
RUN npm install

# 3. Копируем исходники сервера
COPY server ./server

EXPOSE 5000
CMD ["node", "server/server.js"]