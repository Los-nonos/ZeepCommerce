import CategoryDeleteCommand from '../../../Application/Commands/Category/CategoryDeleteCommand';

interface CategoryDeleteHandlerInterface {
  Handle(command: CategoryDeleteCommand): Promise<string>;
}

export default CategoryDeleteHandlerInterface;
