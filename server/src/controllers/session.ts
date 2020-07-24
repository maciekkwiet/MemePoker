import { Router } from 'express';
import { rooms } from '@models/Rooms';
import { log } from '../logger/opts';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    // trzeba ta linijke wykonać, ale zeby ja wykonac trzeba jakos dojść do io
    // io.to(socket.id).emit('EXCEPTION', ex);
    log.info(ex);
  }
});

export { router as sessionController };
