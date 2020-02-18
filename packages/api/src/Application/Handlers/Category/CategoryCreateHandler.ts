import Category from '../../../Domain/Entities/Category';
import CategoryCreateHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryCreateHandlerInterface';
import CategoryCreateCommand from '../../Commands/Category/CategoryCreateCommand';
import { injectable, inject } from 'inversify';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/CategoryRepositoryInterface';
import TYPES from '../../../Infraestructure/DI/types';

@injectable()
class CategoryCreateHandler implements CategoryCreateHandlerInterface {
  private repository: CategoryRepositoryInterface;

  constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async Handle(command: CategoryCreateCommand): Promise<Category> {
    let category = await this.repository.FindByName(command.getName());

    if (!category) {
      throw new Error('This category already exists');
    }

    category = new Category();
    category.name = command.getName();
    category.description = command.getDescription();

    return await this.repository.Create(category);
  }
}

export default CategoryCreateHandler;
