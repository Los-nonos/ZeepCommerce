import { inject, injectable } from 'inversify';
import FindByIdUserRoleCommand from '../../Commands/UserRole/FindByIdUserRoleCommand';

@injectable()
class FindByIdUserRoleHandler {
  constructor() {}
  public async execute(command: FindByIdUserRoleCommand): Promise<any> {}
}

export default FindByIdUserRoleHandler;
