import CategoryFindCommand from '../../../Application/Commands/Category/CategoryFindCommand';
import Category from '../../../Domain/Entities/Category';

interface CategoryFindHandlerInterface {
  FindOne(command: CategoryFindCommand): Promise<Category>;
  FindAll(command: CategoryFindCommand): Promise<Category[]>;
}

export default CategoryFindHandlerInterface;
