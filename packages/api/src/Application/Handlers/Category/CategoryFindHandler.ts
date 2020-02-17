import CategoryFindHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryFindHandlerInterface';
import Category from '../../../Domain/Entities/Category';
import { Equal, MoreThanOrEqual } from 'typeorm';
import CategoryFindCommand from '../../Commands/Category/CategoryFindCommand';
import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';
import { injectable, inject } from 'inversify';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/CategoryRepositoryInterface';
import TYPES from '../../../Infraestructure/types';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';

@injectable()
class CategoryFindHandler implements CategoryFindHandlerInterface {
  private repository: CategoryRepositoryInterface;

  constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public HandleFindById = async (command: CategoryFindCommand): Promise<Category> => {
    const category = await this.repository.FindById(command.getId());

    if (!category) {
      throw new EntityNotFound('Category not found.');
    }

    try {
      return category;
    } catch (error) {
      throw new DataBaseError(error.message);
    }
  };

  public HandleFindAll = async (command: CategoryFindCommand): Promise<Category[]> => {
    const categories = await this.repository.FindAll({ where: { Id: MoreThanOrEqual(command.getId()), limit: 10 } });

    if (!categories) {
      throw new EntityNotFound('Categories not found.');
    }

    try {
      return categories;
    } catch (error) {
      throw new DataBaseError(error.message);
    }
  };
}

export default CategoryFindHandler;
