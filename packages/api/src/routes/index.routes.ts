import userRoutes from './user.routes';
import productRoutes from './product.routes';
import { Router } from 'express';

const router = Router();

router.use(productRoutes);

router.use(userRoutes);

export default router;
