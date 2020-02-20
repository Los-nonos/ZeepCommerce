import User from '../../../Domain/Entities/User';
import UserCreateCommand from '../../../Application/Commands/User/UserCreateCommand';
import { injectable } from 'inversify';
import CreateUserHandlerInterface from '../../../Infraestructure/Interfaces/User/CreateUserHandlerInterface';

@injectable()
class UserCreateHandler implements CreateUserHandlerInterface {
  constructor() {}

  public async Create(command: UserCreateCommand): Promise<User> {
    const name = command.getUserName();
    const lastname = command.getUserLastName();
    const dni = command.getUserDni();

    const user = new User();
    user.Name = name;
    user.Lastname = lastname;
    user.Dni = dni;

    try {
      return await user.save();
    } catch (error) {
      return error.message;
    }
  }
}

export default UserCreateHandler;
