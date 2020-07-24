import { Router } from 'express';
import { rooms } from '@models/Rooms';
import { log } from '../logger/opts';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    res.json(ex);
    log.info(ex);
  }
});

export { router as sessionController };
