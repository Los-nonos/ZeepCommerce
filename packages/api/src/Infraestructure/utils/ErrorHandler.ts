import { injectable } from 'inversify';
import { Request, Response, NextFunction } from 'express';
import { InfraestructureError } from '../Errors/InfraestructureError';

@injectable()
class ErrorHandler {
  public execute = async (e: any, _request: Request, response: Response, _next: NextFunction) => {
    if (e instanceof InfraestructureError) {
      return response.status(e.getStatusCode()).json(e.message);
    }

    return response.status(e.statusCode).json({ message: e.message });
  };
}

export default ErrorHandler;
