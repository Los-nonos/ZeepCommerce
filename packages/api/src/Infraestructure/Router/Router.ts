import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser');
import ProductControllerInterface from '../Interfaces/ProductControllerInterface';
import { inject, injectable } from 'inversify';
import TYPES from '../types';
import cors from 'cors';
import routes from '../../routes/index';

import container from '../inversify.config';
import ErrorHandler from '../../API/Http/ErrorsHandlers/ErrorHandler';
import UserController from '../../Application/Controllers/UserController';

@injectable()
class Router {
  private express: Express;
  private userController: UserController;
  private productController: ProductControllerInterface;

  constructor(
    express: Express,
    @inject(UserController) userController: UserController,
    @inject(TYPES.IProductController) productController: ProductControllerInterface,
  ) {
    this.express = express;
    this.userController = userController;
    this.productController = productController;
  }

  public up() {
    this.middlewares();
    this.userRoutes();
    this.catchErrors();
  }

  catchErrors() {
    this.express.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
      if (!error) {
        next();
      }

      const errorHandler: ErrorHandler = container.get(ErrorHandler);

      errorHandler.handle(error, res);
    });
  }

  middlewares() {    
    this.express.use(cors());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());
  }

  private userRoutes() {
    this.express.use('/apiv1/', routes);

    //user routes
    this.express.post('/apiv1/users', this.userController.Create);
    this.express.get('/apiv1/users/:id', this.userController.ShowOne);
    this.express.get('/apiv1/users', this.userController.ShowAll);
    this.express.put('/apiv1/users/:id', this.userController.Edit);
    this.express.delete('/apiv1/users/:id', this.userController.Delete);

    //product routes
    this.express.post('/apiv1/products', this.productController.Create);
    this.express.put('/apiv1/products/:id', this.productController.Edit);
    this.express.delete('/apiv1/products/:id', this.productController.Delete);
    this.express.get('/apiv1/products/:id', this.productController.ShowById);
    this.express.get('/apiv1/products', this.productController.ShowAll);
  }
}

export default Router;
