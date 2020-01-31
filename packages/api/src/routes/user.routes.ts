import { Router, Request, Response, NextFunction } from 'express';
import DI from '../Infraestructure/inversify.config';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import ShowAllUserAction from '../API/Http/Actions/User/ShowAllUserAction';
import ShowUserAction from '../API/Http/Actions/User/ShowUserAction';
import StoreUserAction from '../API/Http/Actions/User/StoreUserAction';
import EditUserAction from '../API/Http/Actions/User/EditUserAction';
import DeleteUserAction from '../API/Http/Actions/User/DeleteUserAction';

const router = Router();

router.get(
  '/users',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowAllUserAction>(ShowAllUserAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/users/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowUserAction>(ShowUserAction);
    action.execute(req, res);
  }),
);

router.post(
  '/users',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<StoreUserAction>(StoreUserAction);
    await action.execute(req, res);
  }),
);

router.put(
  '/users/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<EditUserAction>(EditUserAction);
    await action.execute(req, res);
  }),
);

router.delete(
  '/users/:id',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<DeleteUserAction>(DeleteUserAction);
    await action.execute(req, res);
  }),
);

export default router;
