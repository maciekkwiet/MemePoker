import { Router } from 'express';
import { rooms } from '@models/Rooms';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    console.error(ex);
  }
});

export { router as sessionController };
