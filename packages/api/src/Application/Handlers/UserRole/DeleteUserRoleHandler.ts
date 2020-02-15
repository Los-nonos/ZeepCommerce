import { inject, injectable } from 'inversify';
import DeleteUserRoleCommand from '../../Commands/UserRole/DeleteUserRoleCommand';
import INTERFACES from '../../../Infraestructure/DI/types';
import IUserRoleRepository from '../../../Domain/Interfaces/IUserRoleRepository';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';

@injectable()
class DeleteUserRoleHandler {
  private repository: IUserRoleRepository;
  constructor(@inject(INTERFACES.IUserRolesRepository) repository: IUserRoleRepository) {
    this.repository = repository;
  }
  public async execute(command: DeleteUserRoleCommand): Promise<any> {
    const role = await this.repository.FindById(command.getId());

    if (!role) {
      throw new EntityNotFound(`Role with id ${command.getId()} not found`);
    }

    await this.repository.Delete(role);
  }
}

export default DeleteUserRoleHandler;
