import LoginCommand from '../../Commands/Auth/LoginCommand';
import { inject } from 'inversify';
import UserRepository from '../../../Persistance/Repositories/UserRepository';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';
import { UnAuthorizedError } from '../../../API/Http/Errors/UnAuthorizedException';
import * as jwt from 'jsonwebtoken';
import jwtConfig from '../../../Infraestructure/utils/jwtConfig';
import User from '../../../Domain/Entities/User';

class LoginHandler {
  private repository: UserRepository;

  constructor(@inject(UserRepository) repository: UserRepository) {
    this.repository = repository;
  }
  public async execute(command: LoginCommand): Promise<{ user: User; token: string }> {
    const user = await this.repository.findOneByName(command.getUsername());

    if (!user) {
      throw new EntityNotFound(`not user found with name: ${command.getUsername()}`);
    }
    if (user.blocked) {
      throw new UnAuthorizedError(`user blocked`);
    }
    if (user.checkIfUnencryptedPasswordIsValid(command.getPassword())) {
      const token = jwt.sign(
        { userId: user.id, username: user.name, roles: user.getRolesFromUserRole() },
        jwtConfig.jwtConfiguration().jwtSecret,
        {
          expiresIn: jwtConfig.jwtConfiguration().expirationTime,
        },
      );
      return { user, token };
    } else {
      throw new UnAuthorizedError(`Password not valid`);
    }
  }
}
export default LoginHandler;
