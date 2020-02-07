import { injectable, inject } from 'inversify';
import ChangePasswordCommand from '../../Commands/Auth/ChangePasswordCommand';
import IUserRepository from '../../../Domain/Interfaces/IUserRepository';
import TYPES from '../../../Infraestructure/types';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';
import { UnAuthorizedError } from '../../../API/Http/Errors/UnAuthorizedException';

@injectable()
class ChangePasswordHandler {
  private repository: IUserRepository;
  constructor(@inject(TYPES.IUserRepository) repository: IUserRepository) {
    this.repository = repository;
  }

  public async execute(command: ChangePasswordCommand): Promise<any> {
    const user = await this.repository.FindByName(command.getName());

    if (!user) {
      throw new EntityNotFound('user not found');
    }

    if (!user.checkIfUnencryptedPasswordIsValid(command.getPassword())) {
      throw new UnAuthorizedError('password not match');
    } else {
      user.hashPassword(command.getPassword());
      return await this.repository.Update(user);
    }
  }
}

export default ChangePasswordHandler;
