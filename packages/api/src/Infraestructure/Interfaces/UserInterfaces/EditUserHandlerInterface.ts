import EditUserCommand from '../../../Domain/Commands/UserCommands/EditUserCommand';
import User from '../../../Domain/Entity/User';

interface EditUserHandlerInterface{
    Edit(command: EditUserCommand): Promise<User>;
}

export default EditUserHandlerInterface;
