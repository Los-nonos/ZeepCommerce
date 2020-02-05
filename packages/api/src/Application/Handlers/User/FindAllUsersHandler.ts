import User from '../../../Domain/Entities/User';
import { injectable } from 'inversify';

import { DataBaseError } from '../../../Infraestructure/Errors/DataBaseError';
import FindAllUsersHandlerInterface from '../../../Infraestructure/Interfaces/User/FindAllUsersHandlerInterface';
import FindAllUsersCommand from '../../../Application/Commands/User/FindAllUsersCommand';
import { MoreThanOrEqual } from 'typeorm';

@injectable()
class FindAllUsersHandler implements FindAllUsersHandlerInterface {
  constructor() {}

  public async FindAllUsers(command: FindAllUsersCommand): Promise<User[]> {
    try {
      const id = command.getId();
      const users: User[] = await User.find({ where: { id: MoreThanOrEqual(id), limit: 20 } });
      return users;
    } catch (error) {
      throw new DataBaseError('DB error');
    }
  }
}
export default FindAllUsersHandler;
