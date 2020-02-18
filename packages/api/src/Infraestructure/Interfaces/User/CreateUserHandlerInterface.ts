import UserCreateCommand from '../../../Application/Commands/User/UserCreateCommand';
import User from '../../../Domain/Entities/User';

interface CreateUserHandlerInterface {
  Create(command: UserCreateCommand): Promise<User>;
}

export default CreateUserHandlerInterface;
