import { Router, Request, Response } from 'express';
import { rooms } from '@models/Rooms';

const router = Router();

interface Query {
  roomId?: number;
}

router.get('/', async (req: Request<any, any, any, Query>, res: Response) => {
  let { roomId } = req.query;

  roomId = typeof roomId === 'string' ? parseInt(roomId, 10) : roomId;

  if (typeof roomId !== 'number') return res.status(400).json({ error: 'Invalid parameter' });

  const room = rooms.getRoom(roomId);
  res.json({ room });
});

router.post('/', async (req: Request, res: Response) => {
  const room = rooms.createRoom();
  res.json({ room });
});

export { router as sessionController };
