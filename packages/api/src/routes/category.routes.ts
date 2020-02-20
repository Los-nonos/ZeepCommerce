import { Router, Request, Response, NextFunction } from 'express';
import DI from '../Infraestructure/DI/inversify.config';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import ShowAllCategoryAction from '../API/Http/Actions/Category/ShowAllCategoryAction';
import ShowCategoryAction from '../API/Http/Actions/Category/ShowCategoryAction';
import CreateCategoryAction from '../API/Http/Actions/Category/CreateCategoryAction';
import EditCategoryAction from '../API/Http/Actions/Category/EditCategoryAction';
import DeleteCategoryAction from '../API/Http/Actions/Category/DeleteCategoryAction';

const router = Router();

router.get(
  '/categories',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowAllCategoryAction>(ShowAllCategoryAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/categories/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowCategoryAction>(ShowCategoryAction);
    action.execute(req, res);
  }),
);

router.post(
  '/categories',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<CreateCategoryAction>(CreateCategoryAction);
    await action.execute(req, res);
  }),
);

router.put(
  '/categories/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<EditCategoryAction>(EditCategoryAction);
    await action.execute(req, res);
  }),
);

router.delete(
  '/categories/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<DeleteCategoryAction>(DeleteCategoryAction);
    await action.execute(req, res);
  }),
);

export default router;
