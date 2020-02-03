import UserCreateCommand from '../../../Application/Commands/User/UserCreateCommand';

interface CreateUserHandlerInterface {
  Create(command: UserCreateCommand): Promise<string>;
}

export default CreateUserHandlerInterface;
