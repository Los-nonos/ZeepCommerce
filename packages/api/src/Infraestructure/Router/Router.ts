import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser');
import { injectable } from 'inversify';
import cors from 'cors';
import routes from '../../routes/index.routes';

import container from '../inversify.config';
import ErrorHandler from '../../Infraestructure/utils/ErrorHandler';

@injectable()
class Router {
  private express: Express;

  constructor(express: Express) {
    this.express = express;
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
  }
}

export default Router;
