import User from '../../../Domain/Entities/User';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';
import { DataBaseError } from '../../../Infraestructure/Errors/DataBaseError';
import UserFindcommand from '../../../Application/Commands/User/UserFindCommand';
import { injectable } from 'inversify';
import FindUserHandlerInterface from '../../../Infraestructure/Interfaces/User/FindUserHandlerInterface';

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
