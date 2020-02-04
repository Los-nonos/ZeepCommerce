import User from '../../../Domain/Entities/User';
import FindAllUsersCommand from '../../../Application/Commands/User/FindAllUsersCommand';

interface FindAllUsersHandlerInterface {
  FindAllUsers(req: FindAllUsersCommand): Promise<User[]>;
}

export default FindAllUsersHandlerInterface;
