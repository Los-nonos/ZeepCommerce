import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser')
import UserControllerInterface from '../Interfaces/UserControllerInterface';
import ProductControllerInterface from '../Interfaces/ProductControllerInterface';
import { inject, injectable } from 'inversify';
import TYPES from '../../types';

import * as path from 'path';
import container from '../../inversify.config';
import ErrorHandler from '../ErrorsHandlers/ErrorHandler';

@injectable()
class Router {

    private express: Express;
    private userController: UserControllerInterface;
    private productController: ProductControllerInterface;

    constructor(
        express: Express,
        @inject(TYPES.IUserController) userController: UserControllerInterface,
        @inject(TYPES.IProductController) productController: ProductControllerInterface

    ) {
        this.express = express;
        this.userController = userController;
        this.productController = productController;
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
        });
        this.express.get('/static/*', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../Presentation/public', req.url));
        });

        //routes api

        this.express.post('/apiv1/login', (req: Request, res: Response) => {
            res.cookie('token', 'pepeito123');
            res.status(200).json({ message: 'login ok' });
        });

        //user routes
        this.express.post('/apiv1/users', this.userController.Create);
        this.express.get('/apiv1/users/:id', this.userController.ShowOne);
        this.express.post('/apiv1/users/:id', this.userController.Edit);
        this.express.delete('/apiv1/users/:id', this.userController.Delete);

        //product routes
        this.express.post('/products', this.productController.Create);
        this.express.post('/products/:id', this.productController.Edit);
        this.express.delete('/products/:id', this.productController.Delete);
    }
}

export default Router;