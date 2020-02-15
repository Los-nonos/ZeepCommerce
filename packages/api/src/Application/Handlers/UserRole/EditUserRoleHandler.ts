import { injectable } from 'inversify';
import EditUserRoleCommand from '../../Commands/UserRole/EditUserRoleCommand';
import { UnAuthorizedError } from '../../../API/Http/Errors/UnAuthorizedException';

@injectable()
class EditUserRoleHandler {
  public async execute(command: EditUserRoleCommand): Promise<any> {
    throw new UnAuthorizedError(`not edit user roles`);
  }
}

export default EditUserRoleHandler;
