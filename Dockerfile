From node
WORKDIR /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 8080