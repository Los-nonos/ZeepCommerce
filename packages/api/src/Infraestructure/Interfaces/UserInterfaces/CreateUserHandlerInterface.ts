import UserCreateCommand from '../../../Domain/Commands/UserCommands/UserCreateCommand';

interface CreateUserHandlerInterface {
  Create(command: UserCreateCommand): Promise<string>;
}

export default CreateUserHandlerInterface;
