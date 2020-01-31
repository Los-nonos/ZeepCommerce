import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser');
import { inject, injectable } from 'inversify';
import cors from 'cors';
import routes from '../../routes/index.routes';

import container from '../inversify.config';
import ErrorHandler from '../../Infraestructure/utils/ErrorHandler';
import UserController from '../../Application/Controllers/UserController';

@injectable()
class Router {
  private express: Express;
  private userController: UserController;

  constructor(
    express: Express,
    @inject(UserController) userController: UserController
  ) {
    this.express = express;
    this.userController = userController;
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
  }
}

export default Router;
