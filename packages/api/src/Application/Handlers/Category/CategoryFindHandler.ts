import CategoryFindHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryFindHandlerInterface';
import Category from '../../../Domain/Entities/Category';
import { Equal, MoreThanOrEqual } from 'typeorm';
import CategoryFindCommand from '../../Commands/Category/CategoryFindCommand';
import { injectable, inject } from 'inversify';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/CategoryRepositoryInterface';
import TYPES from '../../../Infraestructure/types';

@injectable()
class CategoryFindHandler implements CategoryFindHandlerInterface {
  private repository: CategoryRepositoryInterface;

  constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public HandleFindById = async (command: CategoryFindCommand): Promise<Category> => {
    const category = await this.repository.FindById(command.getId());

    return category;
  };

  public HandleFindAll = async (command: CategoryFindCommand): Promise<Category[]> => {
    const categories = await this.repository.FindPaginated(command.getId(), 10);

    return categories;
  };
}

export default CategoryFindHandler;
