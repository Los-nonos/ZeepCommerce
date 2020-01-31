import {Router} from 'express';
import asyncMiddleware from '../API/Http/Middleware/AsyncMiddleware';

const router = Router();

router.get('/users', asyncMiddleware(async (req, res, next) => {
    //const action = new UserAction();
    //await action.execute(req, res);
}))

export default router;