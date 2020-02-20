import { Router, Request, Response, NextFunction } from 'express';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import DI from '../Infraestructure/DI/inversify.config';
import ShowAllProductAction from '../API/Http/Actions/Product/ShowAllProductAction';
import ShowProductAction from '../API/Http/Actions/Product/ShowProductAction';
import StoreProductAction from '../API/Http/Actions/Product/StoreProductAction';
import EditProductAction from '../API/Http/Actions/Product/EditProductAction';
import DeleteProductAction from '../API/Http/Actions/Product/DeleteProductAction';
import { authMiddleware } from '../API/Http/Middleware/AuthenticationMiddleware';

const router = Router();

router.get(
  '/products',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowAllProductAction>(ShowAllProductAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/products/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowProductAction>(ShowProductAction);
    await action.execute(req, res);
  }),
);

router.post(
  '/products',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<StoreProductAction>(StoreProductAction);
    await action.execute(req, res);
  }),
);

router.put(
  '/products/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<EditProductAction>(EditProductAction);
    await action.execute(req, res);
  }),
);

router.delete(
  '/products/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<DeleteProductAction>(DeleteProductAction);
    await action.execute(req, res);
  }),
);

export default router;
