FROM node:16.13.0
WORKDIR usr/src/backend
COPY package*.json index.js routes.js ./
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
