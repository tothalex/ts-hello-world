FROM node:13.14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# EXPOSE 3000

CMD ["npm", "run", "start"]
