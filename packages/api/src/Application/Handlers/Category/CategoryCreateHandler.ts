import Category from '../../../Domain/Entities/Category';
import CategoryCreateHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryCreateHandlerInterface';
import CategoryCreateCommand from '../../Commands/Category/CategoryCreateCommand';
import { injectable } from 'inversify';

@injectable()
class CategoryCreateHandler implements CategoryCreateHandlerInterface {
  public async Handle(command: CategoryCreateCommand): Promise<string> {
    const { name, description }: any = command;

    const category = new Category();
    category.name = name;
    category.description = description;

    try {
      await category.save();
      return 'Category created';
    } catch (error) {
      return error.message;
    }
  }
}

export default CategoryCreateHandler;
