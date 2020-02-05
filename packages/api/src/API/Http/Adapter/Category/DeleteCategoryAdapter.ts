import { Request } from 'express';
import { CategoryDeleteSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryDeleteCommand from '../../../../Application/Commands/Category/CategoryDeleteCommand';
import { injectable } from 'inversify';

@injectable()
class DeleteCategoryAdapter{

    public async from (req: Request){
        const categoryDeleteResult = CategoryDeleteSchema.validate(req.params);

        if (categoryDeleteResult.error || categoryDeleteResult.errors) {
            throw new InvalidData(categoryDeleteResult.error.message || categoryDeleteResult.errors.message);
          }
  
          return new CategoryDeleteCommand(categoryDeleteResult.value.id);
    }
}

export default DeleteCategoryAdapter