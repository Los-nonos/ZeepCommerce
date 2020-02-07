import User from '../../Domain/Entities/User';
import { getRepository, Repository } from 'typeorm';
import IUserRepository from '../../Domain/Interfaces/IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async findOne(id: number): Promise<User> {
    return await this.repository.findOne({ id: id });
  }

  public async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async findOneByName(name: string): Promise<User> {
    return await this.repository.findOne({ where: { name: name }, relations: ['role'] });
  }

  public async Save(t: User): Promise<User> {
    return await this.repository.save(t);
  }

  public async Update(t: User): Promise<void> {
    const result = await this.repository.update({ id: t.id }, t);

    if (!result.affected) {
      throw new Error('user not save in database, before save entity');
    }
  }

  public async Delete(t: User): Promise<void> {
    if (t == undefined) {
      throw new Error('argument user is undefined');
    }

    const result = await this.repository.remove(t);

    if (!result) {
      throw new Error('user not found in database');
    }
  }
}

export default UserRepository;
