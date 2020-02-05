import { Request, Response, NextFunction } from 'express';

export default function asyncMiddleware(func: any): any {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
}
