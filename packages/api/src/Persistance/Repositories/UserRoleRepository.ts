import UserRole from '../../Domain/Entities/UserRole';
import { getRepository, Repository } from 'typeorm';
import IUserRoleRepository from '../../Domain/Interfaces/IUserRoleRepository';
import { EntityNotFound } from '../../Infraestructure/Errors/EntityNotFound';

class UserRoleRepository implements IUserRoleRepository {
  private repository: Repository<UserRole>;

  constructor() {
    this.repository = getRepository(UserRole);
  }

  public async FindById(id: number): Promise<UserRole> {
    return await this.repository.findOne({ Id: id });
  }

  public async Find(): Promise<UserRole[]> {
    return await this.repository.find();
  }

  public async Persist(t: UserRole): Promise<UserRole> {
    return await this.repository.save(t);
  }

  public async Update(t: UserRole): Promise<void> {
    const result = await this.repository.update({ Id: t.Id }, t);
    if (!result.affected) {
      throw new EntityNotFound('');
    }
  }

  public async Delete(t: UserRole): Promise<void> {
    const result = await this.repository.remove(t);
    if (!result) {
      throw new EntityNotFound('');
    }
  }
}

export default UserRoleRepository;
