import BaseRepository from "./BaseRepository";
import User from "../Domain/Entity/User";
import { getRepository, Repository } from "typeorm";
import { EntityNotFound } from "../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";

class UserRepository implements BaseRepository<User> {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async findOne(id: number): Promise<User> {
    const user = await this.repository.findOne({ Id: id });

    if (!user) {
      throw new EntityNotFound("not user found");
    }

    return user;
  }

  public async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async Save(t: User): Promise<void> {
    if (t == undefined) {
      throw new Error("argument user is undefined");
    }

    await this.repository.save(t);
  }

  public async Update(t: User): Promise<void> {
    if (t == undefined) {
      throw new Error("argument user is undefined");
    }

    const result = await this.repository.update({ Id: t.Id }, t);

    if (!result.affected) {
      throw new EntityNotFound("user not save in database, before save entity");
    }
  }

  public async Remove(t: User): Promise<void> {
    if (t == undefined) {
      throw new Error("argument user is undefined");
    }

    const result = await this.repository.remove(t);

    if (!result) {
      throw new EntityNotFound("user not found in database");
    }
  }
}

export default UserRepository;
