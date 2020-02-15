import Category from '../../../Domain/Entities/Category';
import CategoryDeleteHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryDeleteHandlerInterface';
import CategoryDeleteCommand from '../../Commands/Category/CategoryDeleteCommand';
import { injectable } from 'inversify';

@injectable()
class CategoryDeleteHandler implements CategoryDeleteHandlerInterface {
  public async Handle(command: CategoryDeleteCommand): Promise<string> {
    const id = command.getId();

    const category = await Category.findOne({ id: id });

    if (!category) {
      throw new Error('Category not found.');
    }

    try {
      await category.remove();
      return 'Category deleted';
    } catch (error) {
      return error.message;
    }
  }
}

export default CategoryDeleteHandler;
