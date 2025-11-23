FROM node:16
# Создаю рабочую директорию
WORKDIR /app

# Копирую package.json и устанавливаю зависимости
COPY package*.json ./


RUN npm install mongoose redis express

# Копирую остальной код
COPY server ./server

# Копирую приложение
WORKDIR /app/server

# Запуск сервера
CMD ["node", "server.js"]