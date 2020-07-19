import { Router, Request, Response } from 'express';
import { rooms } from '@models/Rooms';

const router = Router();

interface Query {
  roomId?: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    console.error(ex);
  }
});

export { router as sessionController };
