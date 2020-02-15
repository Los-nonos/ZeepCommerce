import CategoryCreateCommand from '../../../Application/Commands/Category/CategoryCreateCommand';

interface CategoryCreateHandlerInterface {
  Handle(command: CategoryCreateCommand): Promise<string>;
}

export default CategoryCreateHandlerInterface;
