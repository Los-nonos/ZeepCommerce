import User from '../../../Domain/Entity/User';
import UserCreateCommand from '../../../Domain/Commands/UserCommands/UserCreateCommand';
import { injectable } from 'inversify';
import CreateUserHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface';

@injectable()
class UserCreateHandler implements CreateUserHandlerInterface {
  constructor() {}

  public async Create(command: UserCreateCommand): Promise<string> {
    const name = command.getUserName();
    const lastname = command.getUserLastName();
    const dni = command.getUserDni();

    const user = new User();
    user.name = name;
    user.lastname = lastname;
    user.dni = dni;

    try {
      await user.save();
      return 'User created correctly';
    } catch (error) {
      return error.message;
    }
  }
}

export default UserCreateHandler;
