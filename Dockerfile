FROM node:18.4.0-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install -i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
