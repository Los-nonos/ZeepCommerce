import User from '../../../Domain/Entities/User';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';
import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';
import UserFindcommand from '../../../Domain/Commands/User/UserFindCommand';
import { injectable } from 'inversify';
import FindUserHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface';

@injectable()
class UserFindHandler implements FindUserHandlerInterface {
  constructor() {}

  public async FindUser(command: UserFindcommand): Promise<User> {
    try {
      const id = command.getId();
      const searchedUser: User | undefined = await User.findOne({ Id: id });

      if (searchedUser) {
        return searchedUser;
      } else {
        throw new EntityNotFound('User not with id not found');
      }
    } catch (error) {
      throw new DataBaseError(error.message);
    }
  }
}

export default UserFindHandler;
