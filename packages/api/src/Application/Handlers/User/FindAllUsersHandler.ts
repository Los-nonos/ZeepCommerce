import User from '../../../Domain/Entities/User';
import { injectable } from 'inversify';

import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';
import FindAllUsersHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/FindAllUsersHandlerInterface';
import FindAllUsersCommand from '../../../Domain/Commands/UserCommands/FindAllUsersCommand';
import { MoreThanOrEqual } from 'typeorm';

@injectable()
class FindAllUsersHandler implements FindAllUsersHandlerInterface {
  constructor() {}

  public async FindAllUsers(command: FindAllUsersCommand): Promise<User[]> {
    try {
      const id = command.getId();
      const users: User[] = await User.find({ where: { Id: MoreThanOrEqual(id), limit: 20 } });
      return users;
    } catch (error) {
      throw new DataBaseError('DB error');
    }
  }
}
export default FindAllUsersHandler;
