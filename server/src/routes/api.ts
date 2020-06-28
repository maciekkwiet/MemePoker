import { Router } from 'express';
import { sessionController } from '@controllers/session';

const router = Router();

router.use('/session', sessionController);

export { router as apiController };
