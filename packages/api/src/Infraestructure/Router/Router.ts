import { Express, Request, Response, NextFunction } from 'express';
import bodyParser = require('body-parser');
import { injectable } from 'inversify';
import cors = require('cors');
import routes from '../../routes/index.routes';

import container from '../DI/inversify.config';
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
    const errorHandler: ErrorHandler = container.get(ErrorHandler);
    this.express.use(errorHandler.execute);
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
