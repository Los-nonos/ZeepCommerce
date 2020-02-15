import { inject, injectable } from 'inversify';
import CreateUserRoleCommand from '../../Commands/UserRole/CreateUserRoleCommand';
import IUserRoleRepository from '../../../Domain/Interfaces/IUserRoleRepository';
import INTERFACES from '../../../Infraestructure/DI/types';
import UserRole from '../../../Domain/Entities/UserRole';

@injectable()
class CreateUserRoleHandler {
  private repository: IUserRoleRepository;
  constructor(@inject(INTERFACES.IUserRolesRepository) repository: IUserRoleRepository) {
    this.repository = repository;
  }
  public async execute(command: CreateUserRoleCommand): Promise<UserRole> {
    const role = new UserRole();
    role.Name = command.getName();

    return await this.repository.Persist(role);
  }
}

export default CreateUserRoleHandler;
