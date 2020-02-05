import CategoryFindHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryFindHandler'
import Category from '../../../Domain/Entities/Category';
import { Equal, MoreThanOrEqual } from 'typeorm';
import CategoryFindCommand from '../../Commands/Category/CategoryFindCommand';
import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';
import { injectable } from 'inversify';

@injectable()
class CategoryFindHandler implements CategoryFindHandlerInterface{

    public FindOne = async (command: CategoryFindCommand): Promise<Category> => {

        try {
          const id = command.getId();
          const category: Category = await Category.findOne({ where: { Id: Equal(id) } });
    
          return category;

        } catch (error) {
          throw new DataBaseError(error.message);
        }
      }
    
      public FindAll = async (command: CategoryFindCommand): Promise<Category[]> => {

        try {
          const id = command.getId();
          const category: Category[] = await Category.find({ where: { Id: MoreThanOrEqual(id), limit: 10 } });

          return category;
          
        } catch (error) {
          throw new DataBaseError(error.message);
        }
      }
}

export default CategoryFindHandler;