import * as express from 'express';
import { rooms } from 'models/Rooms';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  const { roomId }: any = req.query;
  const room = rooms.getRoom(roomId);
  res.json({ room: room });
});

module.exports = router;
