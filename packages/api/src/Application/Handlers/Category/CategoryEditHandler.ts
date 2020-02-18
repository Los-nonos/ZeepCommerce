import CategoryEditHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryEditHandlerInterface';
import CategoryEditCommand from '../../Commands/Category/CategoryEditCommand';
import Category from '../../../Domain/Entities/Category';
import { injectable, inject } from 'inversify';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/CategoryRepositoryInterface';
import TYPES from '../../../Infraestructure/DI/types';

@injectable()
class CategoryEditHandler implements CategoryEditHandlerInterface {
  private repository: CategoryRepositoryInterface;

  constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async Handle(command: CategoryEditCommand): Promise<Category> {
    const category = await this.repository.FindById(command.getId());

    if (!category) {
      throw new EntityNotFound('Category not found.');
    }

    category.name = command.getName();
    category.description = command.getDescription();

    return await this.repository.Update(category);
  }
}

export default CategoryEditHandler;
