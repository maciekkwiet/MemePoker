import * as http from 'http';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as socketio from 'socket.io';

import { socketIoWrapper } from './controllers/socket';

dotenv.config();

// const router = require("./router");

const app = express();
const server = http.createServer(app);
socketIoWrapper(server);

// app.use(router);

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
