import * as express from 'express';
import { rooms } from 'models/Rooms';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  const room = rooms.getRoom(req.body);
  res.json({ room: room });
});

module.exports = router;
