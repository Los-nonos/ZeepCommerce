import CategoryRepositoryInterface from '../../Domain/Interfaces/ICategoryRepository';
import { Repository, getRepository, MoreThanOrEqual } from 'typeorm';
import Category from '../../Domain/Entities/Category';
import { EntityNotFound } from '../../Infraestructure/Errors/EntityNotFound';
import { DataBaseError } from '../../Infraestructure/Errors/DataBaseError';
import { injectable } from 'inversify';

@injectable()
class CategoryRepository implements CategoryRepositoryInterface {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  public async FindAll(where: any): Promise<Category[]> {
    let category: any;
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
    let category: any;
    try {
      category = await this.repository.findOne({ name: name });
    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }

    return category;
  }

  public async FindPaginated(page: number, limit: number): Promise<Category[]> {
    const categories = this.FindAll({ where: { Id: MoreThanOrEqual(page), limit: limit } });

    return categories;
  }

  public async Create(entity: Category): Promise<Category> {
    try {
      await this.repository.save(entity);
    } catch (error) {
      throw new DataBaseError('');
    }

    return entity;
  }

  public async Update(entity: Category): Promise<Category> {
    let category: any;
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

  public async Delete(entity: Category): Promise<void> {
    let category: any;

    try {
      category = await this.repository.delete(entity);
    } catch (error) {
      throw new DataBaseError('');
    }

    if (!category.affected) {
      throw new EntityNotFound('');
    }
  }
}

export default CategoryRepository;
