import * as http from "http";
import * as dotenv from "dotenv";
import * as express from "express";
import * as socketio from "socket.io";
const mongoose = require("mongoose");

dotenv.config();

// const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// app.use(router);

// io.on("connect", (socket) => {
//   socket.on("sendMessage", (message, callback) => {
//     const user = getUser(socket.id);

//     io.to(user.room).emit("message", { user: user.name, text: message });

//     callback();
//   });
// });

const dbKey = process.env.DB_KEY;

mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected with DB"))
  .catch(() => console.error("Error with DB"));

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
