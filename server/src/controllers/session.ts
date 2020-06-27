import { Router, Request, Response } from 'express';
import { rooms } from 'models/Rooms';

const router = Router();

interface Query {
  roomId?: number;
}

router.get('/', async (req: Request<any, any, any, Query>, res: Response) => {
  const { roomId } = req.query;

  if (typeof roomId !== 'number') return res.status(400).json({ error: 'Invalid parameter' });

  const room = rooms.getRoom(roomId);
  res.json({ room });
});

router.post('/', async () => {
  //Kod na stworzenie nowej sesji
});

export { router as sessionController };
