import { inject, injectable } from 'inversify';
import FindUserRoleCommand from '../../Commands/UserRole/FindUserRoleCommand';
import IUserRoleRepository from '../../../Domain/Interfaces/IUserRoleRepository';
import INTERFACES from '../../../Infraestructure/DI/types';
import UserRole from '../../../Domain/Entities/UserRole';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';

@injectable()
class FindUserRoleHandler {
  private repository: IUserRoleRepository;
  constructor(@inject(INTERFACES.IUserRolesRepository) repository: IUserRoleRepository) {
    this.repository = repository;
  }
  public async execute(command: FindUserRoleCommand): Promise<UserRole[]> {
    const roles = await this.repository.Find({ Name: command.getName() });

    if (!roles) {
      throw new EntityNotFound(`not found roles with name ${command.getName()}`);
    } else {
      return roles;
    }
  }
}

export default FindUserRoleHandler;
