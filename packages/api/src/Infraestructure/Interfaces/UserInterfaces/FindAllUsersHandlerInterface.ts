import User from '../../../Domain/Entities/User';
import FindAllUsersCommand from '../../../Domain/Commands/UserCommands/FindAllUsersCommand';

interface FindAllUsersHandlerInterface {
  FindAllUsers(req: FindAllUsersCommand): Promise<User[]>;
}

export default FindAllUsersHandlerInterface;
