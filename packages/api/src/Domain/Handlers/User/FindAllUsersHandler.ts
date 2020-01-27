import User from '../../Entity/User';
import { injectable } from 'inversify';

import { DataBaseError } from '../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError';
import FindAllUsersHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/FindAllUsersHandlerInterface';
import FindAllUsersCommand from '../../Commands/UserCommands/FindAllUsersCommand';
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
