import userRoutes from './user.routes';
import userRoleRoutes from './userrole.routes';
import productRoutes from './product.routes';
import authRoutes from './auth.routes';
import categoryRoutes from './category.routes';
import { Router } from 'express';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../utils/swagger.json';

const router = Router();

router.use(productRoutes);

router.use(userRoleRoutes);

router.use(userRoutes);

router.use(authRoutes);

router.use(categoryRoutes);

if (process.env.NODE_ENV !== 'production') {
  // Routes only used for debugging purposes
  router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default router;
