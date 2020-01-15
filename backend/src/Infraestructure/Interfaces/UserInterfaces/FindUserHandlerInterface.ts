import FindUserCommand from '../../../Domain/Commands/UserCommands/FindUserCommand';
import User from '../../../Domain/Entity/User';

interface FindUserHandlerInterface{
    FindUser(command: FindUserCommand): Promise<User>;
}

export default FindUserHandlerInterface;