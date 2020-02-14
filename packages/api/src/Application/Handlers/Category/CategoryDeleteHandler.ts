import Category from '../../../Domain/Entities/Category'
import CategoryDeleteHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryDeleteHandlerInterface'
import CategoryDeleteCommand from '../../Commands/Category/CategoryDeleteCommand';
import { injectable, inject } from 'inversify';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/CategoryRepositoryInterface';
import TYPES from '../../../Infraestructure/types';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';
import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';

@injectable()
class CategoryDeleteHandler implements CategoryDeleteHandlerInterface{

    private repository: CategoryRepositoryInterface;

    constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface){
      this.repository = repository;
    }

    public async Handle(command: CategoryDeleteCommand): Promise <void> {
      const categoryResult = await this.repository.FindById(command.getId());

      if (!categoryResult) {
        throw new EntityNotFound('Category not found.');
      }
  
      try {
        await this.repository.Delete(categoryResult);
        
      } catch (error) {
        throw new DataBaseError('');
      }
    }
}

export default CategoryDeleteHandler;