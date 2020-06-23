import * as http from 'http';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';

const cookieParser = require('cookie-parser');

import { socketController } from './controllers/socket';
const router = require('./router');

dotenv.config();

const app = express();
const server = http.createServer(app);
const path = require('path');
socketController(server);

app.use(router);

const dbKey: any = process.env.DB_KEY;

mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected with DB'))
  .catch(() => console.error('Error with DB'));

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));

const publicPath = path.join(__dirname, '../', '/client', '/public');
app.use(express.static(publicPath));

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use('/api', router);

app.get('/', function (req, res) {
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);
});
