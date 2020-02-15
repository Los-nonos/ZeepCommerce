import RenewTokenCommand from '../../Commands/Auth/RenewTokenCommand';
import * as jwt from 'jsonwebtoken';
import jwtConfig from '../../../Infraestructure/utils/jwtConfig';
import { UnAuthorizedError } from '../../../API/Http/Errors/UnAuthorizedException';

class RenewTokenHandler {
  constructor() {}

  public execute(command: RenewTokenCommand): string {
    let decoded;
    try {
      decoded = jwt.verify(command.getToken(), jwtConfig.jwtConfiguration().jwtSecret);
    } catch {
      throw new UnAuthorizedError('Unauthorized or corrupted token');
    }
    if (typeof decoded !== 'object') {
      throw new UnAuthorizedError('Unauthorized or corrupted token');
    }
    return jwt.sign(
      { userId: decoded.userId, username: decoded.username, roles: decoded.roles },
      jwtConfig.jwtConfiguration().jwtSecret,
      {
        expiresIn: jwtConfig.jwtConfiguration().expirationTime,
      },
    );
  }
}

export default RenewTokenHandler;
