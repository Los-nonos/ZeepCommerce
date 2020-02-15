import { inject, injectable } from 'inversify';
import FindUserRoleCommand from '../../Commands/UserRole/FindUserRoleCommand';

@injectable()
class FindUserRoleHandler {
  constructor() {}
  public async execute(command: FindUserRoleCommand): Promise<any> {}
}

export default FindUserRoleHandler;
