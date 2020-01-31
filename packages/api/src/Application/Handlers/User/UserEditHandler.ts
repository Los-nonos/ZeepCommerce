import EditUserCommand from '../../../Domain/Commands/UserCommands/EditUserCommand';
import User from '../../../Domain/Entities/User';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';
import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';
import { injectable } from 'inversify';
import EditUserHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/EditUserHandlerInterface';

@injectable()
class UserEditHandler implements EditUserHandlerInterface {
  constructor() {}

  public async Edit(command: EditUserCommand): Promise<User> {
    const user = await User.findOne(command.getUserId());
    try {
      if (!user) {
        throw new EntityNotFound('User not found');
      } else {
        user.name = command.getUserName();
        user.lastname = command.getUserLastName();

        await user.save();

        return user;
      }
    } catch (error) {
      throw new DataBaseError(error);
    }
  }
}

export default UserEditHandler;
