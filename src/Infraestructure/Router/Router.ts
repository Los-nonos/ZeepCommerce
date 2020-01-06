import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser')
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
        this.express.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            const errorHandler: ErrorHandler = container.get(ErrorHandler);

            errorHandler.handle(error, res);
        })

        //here routes
        this.express.get('/', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../Presentation/public/index.html'));
        })

        //user routs
        this.express.post('/users', this.userController.Create);


        this.express.post('/products', ProductController.Create);
    }
}

export default Router;