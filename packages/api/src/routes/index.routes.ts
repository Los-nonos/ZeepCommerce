import userRoutes from './user.routes';
import productRoutes from './product.routes';
import authRoutes from './auth.routes';
import { Router } from 'express';

const router = Router();

router.use(productRoutes);

router.use(userRoutes);

router.use(authRoutes);

export default router;
