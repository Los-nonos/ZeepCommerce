import { Router, Request, Response, NextFunction } from 'express';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import container from '../Infraestructure/inversify.config';
import LoginAction from '../API/Http/Actions/Auth/LoginAction';
import RenewTokenAction from '../API/Http/Actions/Auth/RenewTokenAction';

const router = Router();

router.post(
  '/renew-token',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = container.resolve<RenewTokenAction>(RenewTokenAction);
    await action.execute(req, res);
  }),
);

router.post(
  '/login',
  asyncMiddleware(async (req: Request, res: Response, _next: NextFunction) => {
    const action = container.get<LoginAction>(LoginAction);
    await action.execute(req, res);
  }),
);

export default router;
