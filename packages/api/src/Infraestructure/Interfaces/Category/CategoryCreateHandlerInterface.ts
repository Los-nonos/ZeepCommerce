import CategoryCreateCommand from '../../../Application/Commands/Category/CategoryCreateCommand';
import Category from '../../../Domain/Entities/Category';

interface CategoryCreateHandlerInterface {
  Handle(command: CategoryCreateCommand): Promise<Category>;
}

export default CategoryCreateHandlerInterface;