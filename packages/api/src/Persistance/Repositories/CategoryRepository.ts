import CategoryRepositoryInterface from '../../Domain/Interfaces/CategoryRepositoryInterface';
import { Repository, getRepository } from 'typeorm';
import Category from '../../Domain/Entities/Category';
import { EntityNotFound } from '../../Infraestructure/Errors/EntityNotFound';
import { DataBaseError } from '../../Infraestructure/Errors/DataBaseError';

class CategoryRepository implements CategoryRepositoryInterface {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  public async FindAll(): Promise<Category[]> {
    let category;

    try {
      category = await this.repository.find();
    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }

    return await this.repository.find();
  }

  public async FindById(id: number): Promise<Category> {
    let category;
    try {
      category = this.repository.findOne({ id: id });

    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }

    return category;
  }

  public async FindByName(name: string): Promise<Category> {
    let category;
    try {
      category = this.repository.findOne({ name: name });

    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }

    return category;
  }

  public async Create(entity: Category): Promise<Category> {
    try {
      return await this.repository.save(entity);

    } catch (error) {
      throw new DataBaseError('');
    }
  }

  public async Update(entity: Category): Promise<Category> {
    let category;

    try {
      category = await this.repository.update({ id: entity.id }, entity);

    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }

    return entity;
  }

  public async Delete(entity: Category): Promise<Category> {
    let category;

    try {
      category = await this.repository.delete(entity);

    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }

    return entity;
  }
}

export default CategoryRepository;
