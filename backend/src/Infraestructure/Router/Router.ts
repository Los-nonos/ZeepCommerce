import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser')
import co
import ProductController from '../../Application/Controllers/ProductController';
import UserControllerInterface from '../Interfaces/UserControllerInterface';
import { inject } from 'inversify';
import TYPES from '../../types';

import * as path from 'path';
import container from '../../inversify.config';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

class Router {

    private express: Express;
    private userController: UserControllerInterface;

    constructor(
        express: Express,
        @inject(TYPES.IUserController) userController: UserControllerInterface
    ) {
        this.express = express;
        this.userController = userController;
    }

    public up() {
        this.userRoutes();
    }

    private userRoutes() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(cookie)
        this.express.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            const errorHandler: ErrorHandler = container.get(ErrorHandler);

            errorHandler.handle(error, res);
        })

        //here routes
        this.express.get('/', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../Presentation/public/index.html'));
        })

        this.express.post('/login', (req: Request, res: Response) => {
            res.cookie('token', 'pepeito123');
            res.status(200).json({message: 'login ok'});
        })

        //user routes
        this.express.post('/users', this.userController.Create);

        //product routes
        this.express.post('/products', ProductController.Create);
        this.express.delete('/products/:id', ProductController.Delete);
    }
}

export default Router;