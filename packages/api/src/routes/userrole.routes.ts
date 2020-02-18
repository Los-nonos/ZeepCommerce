import container from '../Infraestructure/DI/inversify.config';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';
import CreateUserRoleAction from '../API/Http/Actions/UserRole/CreateUserRoleAction';
import EditUserRoleAction from '../API/Http/Actions/UserRole/EditUserRoleAction';
import DeleteUserRoleAction from '../API/Http/Actions/UserRole/DeleteUserRoleAction';
import FindByIdUserRoleAction from '../API/Http/Actions/UserRole/FindByIdUserRoleAction';
import FindUserRoleAction from '../API/Http/Actions/UserRole/FindUserRoleAction';
import { Router, Request, Response, NextFunction } from 'express';
import { authMiddleware } from '../API/Http/Middleware/AuthenticationMiddleware';

const router = Router();

router.post(
  '/userrole',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['admin']);
  },
  asyncMiddleware(async (req: Request, res: Response) => {
    const action = container.resolve<CreateUserRoleAction>(CreateUserRoleAction);
    await action.execute(req, res);
  }),
);

router.put(
  '/userrole/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['admin']);
  },
  asyncMiddleware(async (req: Request, res: Response) => {
    const action = container.resolve<EditUserRoleAction>(EditUserRoleAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/userrole',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['admin']);
  },
  asyncMiddleware(async (req: Request, res: Response) => {
    const action = container.resolve<FindUserRoleAction>(FindUserRoleAction);
    await action.execute(req, res);
  }),
);

router.get(
  '/userrole/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['admin']);
  },
  asyncMiddleware(async (req: Request, res: Response) => {
    const action = container.resolve<FindByIdUserRoleAction>(FindByIdUserRoleAction);
    await action.execute(req, res);
  }),
);

router.delete(
  '/userrole',
  (req: Request, res: Response, next: NextFunction) => {
    authMiddleware(req, res, next, ['admin']);
  },
  asyncMiddleware(async (req: Request, res: Response) => {
    const action = container.resolve<DeleteUserRoleAction>(DeleteUserRoleAction);
    await action.execute(req, res);
  }),
);

export default router;
