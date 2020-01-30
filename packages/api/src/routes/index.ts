import userRoutes from './user';
import {Router} from 'express';

const router = Router();

router.use(userRoutes);

export default router;