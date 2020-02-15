import CategoryEditCommand from '../../../Application/Commands/Category/CategoryEditCommand';

interface CategoryEditHandlerInterface {
  Handle(command: CategoryEditCommand): Promise<string>;
}

export default CategoryEditHandlerInterface;
