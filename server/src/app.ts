import * as http from 'http';
import * as dotenv from 'dotenv';
import * as express from 'express';

import { socketController } from './controllers/socket';
// const router = require("./router");

dotenv.config();

const app = express();
const server = http.createServer(app);
socketController(server);

// app.use(router);

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
