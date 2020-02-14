import CategoryEditHandlerInterface from '../../../Infraestructure/Interfaces/Category/CategoryEditHandlerInterface'
import CategoryEditCommand from '../../Commands/Category/CategoryEditCommand';
import Category from '../../../Domain/Entities/Category'
import { injectable, inject } from 'inversify';
import { EntityNotFound } from '../../../API/Http/Errors/EntityNotFound';
import { DataBaseError } from '../../../API/Http/Errors/DataBaseError';
import CategoryRepositoryInterface from '../../../Domain/Interfaces/CategoryRepositoryInterface';
import TYPES from '../../../Infraestructure/types';

@injectable()
class CategoryEditHandler implements CategoryEditHandlerInterface{

    private repository: CategoryRepositoryInterface;

    constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepositoryInterface) {
        this.repository = repository;
    }

    public async Handle(command: CategoryEditCommand): Promise <Category> {

        const category = await this.repository.FindById(command.getId())

        if(!category) {
            throw new EntityNotFound('Category not found.');
        }

        category.name = command.getName();
        category.description = command.getDescription();

        try {
            return await this.repository.Update(category);

        } catch (error) {
            throw new DataBaseError(error);
        }
    }
}

export default CategoryEditHandler;