import CategoryEditHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryEditHandlerInterface'
import CategoryEditCommand from '../../Commands/Category/CategoryEditCommand';
import Category from '../../../Domain/Entities/Category'
import { injectable } from 'inversify';

@injectable()
class CategoryEditHandler implements CategoryEditHandlerInterface{

    public async Handle(command: CategoryEditCommand): Promise <string> {

        const id = command.getId();

        const category = await Category.findOne({ id: id });

        if (!category) {
            throw new Error('Category not foud');
        }

        category.name = command.getName();
        category.description = command.getDescription();

        try {
            await category.save();
            return 'Category edited';
        } catch (error) {
            return error.message;
        }
    }
}

export default CategoryEditHandler;