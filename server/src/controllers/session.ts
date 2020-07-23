import { Router } from 'express';
import { rooms } from '@models/Rooms';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    // trzeba ta linijke wykonać, ale zeby ja wykonac trzeba jakos dojść do io
    //io.to(socket.id).emit('EXCEPTION', ex);
    // logger
    console.error(ex);
  }
});

export { router as sessionController };
