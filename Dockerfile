FROM node:lts-alpine
WORKDIR /app
RUN npm install -g http-server
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]