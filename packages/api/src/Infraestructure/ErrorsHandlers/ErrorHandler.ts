import { injectable } from 'inversify';
import { Response } from 'express';
import { InfraestructureError } from './Errors/InfraestructureError';
import { ApplicationError } from './Errors/AppError';

@injectable()
class ErrorHandler {
  public handle(error: Error, res: Response): void {
    if (error instanceof InfraestructureError) {
      res.status(error.getStatusCode()).send(error.message);
    } else if (error instanceof ApplicationError) {
      res.status(500).send('Internal server error');
    }
  }
}

export default ErrorHandler;
