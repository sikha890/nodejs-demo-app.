
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY app.js ./
COPY app.test.js ./

EXPOSE 3000

CMD ["npm", "start"]