import EditUserCommand from '../../../Application/Commands/User/EditUserCommand';
import User from '../../../Domain/Entities/User';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';
import { DataBaseError } from '../../../Infraestructure/Errors/DataBaseError';
import { injectable } from 'inversify';
import EditUserHandlerInterface from '../../../Infraestructure/Interfaces/User/EditUserHandlerInterface';

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

        return await user.save();
      }
    } catch (error) {
      throw new DataBaseError(error);
    }
  }
}

export default UserEditHandler;
