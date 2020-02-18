import { inject, injectable } from 'inversify';
import FindByIdUserRoleCommand from '../../Commands/UserRole/FindByIdUserRoleCommand';
import IUserRoleRepository from '../../../Domain/Interfaces/IUserRoleRepository';
import INTERFACES from '../../../Infraestructure/DI/types';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';
import UserRole from '../../../Domain/Entities/UserRole';

@injectable()
class FindByIdUserRoleHandler {
  private repository: IUserRoleRepository;
  constructor(@inject(INTERFACES.IUserRolesRepository) repository: IUserRoleRepository) {
    this.repository = repository;
  }
  public async execute(command: FindByIdUserRoleCommand): Promise<UserRole> {
    const role = await this.repository.FindById(command.getId());

    if (!role) {
      throw new EntityNotFound(`not found user role with id ${command.getId()}`);
    } else {
      return role;
    }
  }
}

export default FindByIdUserRoleHandler;
