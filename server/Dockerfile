FROM node:16

WORKDIR /app


COPY package*.json ./


RUN npm install mongoose redis express


COPY server ./server


WORKDIR /app/server
CMD ["node", "server.js"]