import CategoryDeleteCommand from '../../../Application/Commands/Category/CategoryDeleteCommand';
import Category from '../../../Domain/Entities/Category';

interface CategoryDeleteHandlerInterface {
  Handle(command: CategoryDeleteCommand): Promise<Category>;
}

export default CategoryDeleteHandlerInterface;
