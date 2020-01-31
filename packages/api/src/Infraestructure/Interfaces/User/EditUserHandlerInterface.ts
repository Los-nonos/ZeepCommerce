import EditUserCommand from '../../../Domain/Commands/User/EditUserCommand';
import User from '../../../Domain/Entities/User';

interface EditUserHandlerInterface {
  Edit(command: EditUserCommand): Promise<User>;
}

export default EditUserHandlerInterface;
