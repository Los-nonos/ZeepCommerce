import CategoryDeleteCommand from '../../../Application/Commands/Category/CategoryDeleteCommand';

interface CategoryDeleteHandlerInterface {
  Handle(command: CategoryDeleteCommand): Promise<void>;
}

export default CategoryDeleteHandlerInterface;
