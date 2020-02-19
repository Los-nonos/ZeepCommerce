import Category from '../../../Domain/Entities/Category';
import CategoryDeleteHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryDeleteHandlerInterface';
import CategoryDeleteCommand from '../../Commands/Category/CategoryDeleteCommand';
import { injectable, inject } from 'inversify';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/ICategoryRepository';
import TYPES from '../../../Infraestructure/types';
import { EntityNotFound } from '../../../Infraestructure/Errors/EntityNotFound';
import { DataBaseError } from '../../../Infraestructure/Errors/DataBaseError';

@injectable()
class CategoryDeleteHandler implements CategoryDeleteHandlerInterface {
  private repository: CategoryRepositoryInterface;

  constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async Handle(command: CategoryDeleteCommand): Promise<void> {
    const category = await this.repository.FindById(command.getId());

    if (!category) {
      throw new EntityNotFound('Category not found.');
    }

    await this.repository.Delete(category);
  }
}

export default CategoryDeleteHandler;
