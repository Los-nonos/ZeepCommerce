import { inject, injectable } from 'inversify';
import EditUserRoleCommand from '../../Commands/UserRole/EditUserRoleCommand';

@injectable()
class EditUserRoleHandler {
  constructor() {}
  public async execute(command: EditUserRoleCommand): Promise<any> {}
}

export default EditUserRoleHandler;
