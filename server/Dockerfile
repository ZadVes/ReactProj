FROM node:16

WORKDIR /app

# 1. Копируем ТОЛЬКО package.json сначала (для оптимизации кэша)
COPY package*.json ./

# 2. Устанавливаем ВСЕ зависимости сервера
RUN npm install mongoose redis express

# 3. Копируем остальные файлы сервера
COPY server ./server

# 4. Запускаем сервер
WORKDIR /app/server
CMD ["node", "server.js"]