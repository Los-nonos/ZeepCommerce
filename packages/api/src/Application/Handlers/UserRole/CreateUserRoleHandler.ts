import { inject, injectable } from 'inversify';
import CreateUserRoleCommand from '../../Commands/UserRole/CreateUserRoleCommand';

@injectable()
class CreateUserRoleHandler {
  constructor() {}
  public async execute(command: CreateUserRoleCommand): Promise<any> {}
}

export default CreateUserRoleHandler;
