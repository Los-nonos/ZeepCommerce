import User from '../../Entity/User';
import { EntityNotFound } from '../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound';
import { DataBaseError } from '../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError';
import UserFindcommand from '../../Commands/UserCommands/UserFindCommand';
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
