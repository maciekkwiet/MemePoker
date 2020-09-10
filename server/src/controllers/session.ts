import { Router } from 'express';
import { rooms } from '@models/Rooms';
import { log } from '@services/logger';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    res.status(500).json(ex.message);
    log.error(ex);
  }
});

export { router as sessionController };
