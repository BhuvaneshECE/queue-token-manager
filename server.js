const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let currentToken = 0;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("getToken", () => {
    currentToken++;
    io.emit("newToken", currentToken);
  });

  socket.on("callNext", () => {
    io.emit("callToken", currentToken);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
