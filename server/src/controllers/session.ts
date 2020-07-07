import { Router, Request, Response } from 'express';
import { rooms } from '@models/Rooms';

const router = Router();

interface Query {
  roomId?: number;
}

router.get('/', async (req: Request<any, any, any, Query>, res: Response) => {
  try {
    const { roomId } = req.query;
    if (typeof roomId !== 'number') return res.status(400).json({ error: 'Invalid parameter' });
    const room = rooms.getRoom(roomId);
    res.json({ room });
  } catch (ex) {
    console.error(ex);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const room = rooms.createRoom();
    res.json({ room });
  } catch (ex) {
    console.error(ex);
  }
});

export { router as sessionController };
