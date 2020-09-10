import { Router } from 'express';
import { rooms } from '@models/Rooms';
import { client } from '@services/logger';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    res.status(500).json(ex.message);
    client.log(ex);
  }
});

export { router as sessionController };
