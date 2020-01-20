
import User from '../../../Domain/Entity/User';
import UserFindCommand from '../../../Domain/Commands/UserCommands/UserFindCommand';

interface FindUserHandlerInterface{
    FindUser(command: UserFindCommand): Promise<User>;
}

export default FindUserHandlerInterface;