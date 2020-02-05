import { Request, Response, NextFunction } from 'express';
import jwtConfig from '../../../Infraestructure/utils/jwtConfig';
import * as jwt from 'jsonwebtoken';
import { SessionInvalid } from '../Errors/SessionInvalid';
import { UnAuthorizedError } from '../Errors/UnAuthorizedException';

const checkRolesMiddleware = (roles: string[], decoded): void => {
  if (typeof decoded == 'object' && decoded.roles) {
    let isIncluded = false;
    roles.forEach((role: string): void => {
      if (decoded.roles.includes(role)) {
        isIncluded = true;
      }
    });
    if (!isIncluded) {
      throw new SessionInvalid('Unauthorized - invalid role');
    }
  } else {
    throw new UnAuthorizedError('Unauthorized or corrupted token');
  }
};

export const authMiddleware = (request: Request, _response: Response, next: NextFunction, roles?: string[]): void => {
  const token: string = request.body.authorization || request.query.authorization || request.headers['authorization'];
  if (token) {
    jwt.verify(token, jwtConfig.jwtConfiguration().jwtSecret, (err, decoded): void => {
      if (err) {
        throw new UnAuthorizedError('Unauthorized or corrupted token');
      }
      if (roles) {
        checkRolesMiddleware(roles, decoded);
      }
      return next();
    });
  } else {
    throw new UnAuthorizedError('No token retrieved');
  }
};
