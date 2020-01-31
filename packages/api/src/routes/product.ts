import { Router, Request, Response, NextFunction } from 'express';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import DI from '../Infraestructure/inversify.config';
import ShowAllProductAction from '../API/Http/Actions/Product/ShowAllProductAction';
import ShowProductAction from '../API/Http/Actions/Product/ShowProductAction';
import StoreProductAction from '../API/Http/Actions/Product/StoreProductAction';
import EditProductAction from '../API/Http/Actions/Product/EditProductAction';
import DeleteProductAction from '../API/Http/Actions/Product/DeleteProductAction';

const router = Router();

router.get(
  '/products',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowAllProductAction>(ShowAllProductAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/products/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowProductAction>(ShowProductAction);
    await action.execute(req, res);
  }),
);

router.post(
  '/products',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<StoreProductAction>(StoreProductAction);
    await action.execute(req, res);
  }),
);

router.put(
  '/products/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<EditProductAction>(EditProductAction);
    await action.execute(req, res);
  }),
);

router.delete(
  '/products/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<DeleteProductAction>(DeleteProductAction);
    await action.execute(req, res);
  }),
);

export default router;
