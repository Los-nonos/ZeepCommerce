import { Router, Request, Response, NextFunction } from 'express';
import DI from '../Infraestructure/DI/inversify.config';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import ShowAllUserAction from '../API/Http/Actions/User/ShowAllUserAction';
import ShowUserAction from '../API/Http/Actions/User/ShowUserAction';
import StoreUserAction from '../API/Http/Actions/User/StoreUserAction';
import EditUserAction from '../API/Http/Actions/User/EditUserAction';
import DeleteUserAction from '../API/Http/Actions/User/DeleteUserAction';
import { authMiddleware } from '../API/Http/Middleware/AuthenticationMiddleware';

const router = Router();

router.get(
  '/users',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper', 'client']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowAllUserAction>(ShowAllUserAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/users/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper', 'client']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<ShowUserAction>(ShowUserAction);
    action.execute(req, res);
  }),
);

router.post(
  '/users',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper', 'client']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<StoreUserAction>(StoreUserAction);
    await action.execute(req, res);
  }),
);

router.put(
  '/users/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['zeeper', 'client']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<EditUserAction>(EditUserAction);
    await action.execute(req, res);
  }),
);

router.delete(
  '/users/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['admin']);
  },
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = DI.resolve<DeleteUserAction>(DeleteUserAction);
    await action.execute(req, res);
  }),
);

export default router;
