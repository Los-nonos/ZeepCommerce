import userRoutes from './user';
import productRoutes from './product';
import {Router} from 'express';

const router = Router();

router.use(productRoutes);

router.use(userRoutes);

export default router;