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

const dbKey = process.env.DB_KEY;

mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected with DB"))
  .catch(() => console.error("Error with DB"));

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
