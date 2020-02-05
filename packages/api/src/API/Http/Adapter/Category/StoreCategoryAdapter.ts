import { Request } from 'express';
import { InvalidData } from '../../Errors/InvalidData';
import { CategoryCreateSchema } from '../../Validator/Schemas/CategorySchema';
import CategoryCreateCommand from '../../../../Application/Commands/Category/CategoryCreateCommand';
import { injectable } from 'inversify';

@injectable()
class StoreCategoryAdapter{

    public async from(req: Request){
        
        const createCategoryResult = CategoryCreateSchema.validate(req.body);

        if (createCategoryResult.error || createCategoryResult.errors) {
            throw new InvalidData(createCategoryResult.error.message || createCategoryResult.errors.message);
          }

        return new CategoryCreateCommand(
            createCategoryResult.value.name,
            createCategoryResult.value.description
        )
    }
}

export default StoreCategoryAdapter;