import CategoryEditCommand from '../../../Application/Commands/Category/CategoryEditCommand';
import Category from '../../../Domain/Entities/Category';

interface CategoryEditHandlerInterface {
  Handle(command: CategoryEditCommand): Promise<Category>;
}

export default CategoryEditHandlerInterface;