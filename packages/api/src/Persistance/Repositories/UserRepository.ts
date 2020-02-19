import { EntityNotFound } from '../../Infraestructure/Errors/EntityNotFound';
import User from '../../Domain/Entities/User';
import { getRepository, Repository } from 'typeorm';
import IUserRepository from '../../Domain/Interfaces/IUserRepository';
import { DataBaseError } from '../../Infraestructure/Errors/DataBaseError';
import { injectable } from 'inversify';

@injectable()
class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async FindById(id: number): Promise<User> {
    const user: User | undefined = await this.repository.findOne({ relations: ['roles'], where: { Id: id } });

    if (!user) {
      throw new EntityNotFound('not user found');
    }

    return user;
  }

  public async Find(params: any): Promise<User[]> {
    return await this.repository.find({ relations: ['roles'], where: params });
  }

  public async FindByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ where: { Name: name }, relations: ['roles'] });

    if (!user) {
      throw new EntityNotFound(`User with name ${name} not found`);
    }

    return user;
  }

  public async Persist(user: User): Promise<User> {
    try {
      return await this.repository.save(user);
    } catch {
      throw new DataBaseError(`Error in DB try save persist user`);
    }
  }

  public async Update(user: User): Promise<void> {
    try {
      const result = await this.repository.update(user.Id, user);

      if (!(result && result.affected === 1)) {
        throw new DataBaseError(``);
      }
    } catch (error) {
      throw new DataBaseError(`User not updated`);
    }
  }

  public async Delete(user: User): Promise<void> {
    try {
      const result = await this.repository.delete(user.Id);

      if (!(result && result.affected === 1)) {
        throw new DataBaseError('');
      }
    } catch {
      throw new DataBaseError('User not deleted');
    }
  }
}

export default UserRepository;
