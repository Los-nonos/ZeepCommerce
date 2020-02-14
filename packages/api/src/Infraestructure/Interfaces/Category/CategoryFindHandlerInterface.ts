import CategoryFindCommand from '../../../Application/Commands/Category/CategoryFindCommand';
import Category from '../../../Domain/Entities/Category';

interface CategoryFindHandlerInterface {
  HandleFindById(command: CategoryFindCommand): Promise<Category>;
  HandleFindAll(command: CategoryFindCommand): Promise<Category[]>;
}

export default CategoryFindHandlerInterface;