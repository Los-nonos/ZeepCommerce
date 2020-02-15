import { inject, injectable } from 'inversify';
import DeleteUserRoleCommand from '../../Commands/UserRole/DeleteUserRoleCommand';

@injectable()
class DeleteUserRoleHandler {
  constructor() {}
  public async execute(command: DeleteUserRoleCommand): Promise<any> {}
}

export default DeleteUserRoleHandler;
