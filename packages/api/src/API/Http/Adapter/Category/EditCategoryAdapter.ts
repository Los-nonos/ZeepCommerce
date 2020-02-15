import { Request } from 'express';
import { CategoryEditSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryEditCommand from '../../../../Application/Commands/Category/CategoryEditCommand';
import { injectable } from 'inversify';

@injectable()
class EditCategoryAdapter {
  public async from(req: Request) {
    const categoryEditResult = CategoryEditSchema.validate(req.params.body);

    if (categoryEditResult.error || categoryEditResult.errors) {
      throw new InvalidData(categoryEditResult.error.message || categoryEditResult.errors.message);
    }

    return new CategoryEditCommand(
      categoryEditResult.value.id,
      categoryEditResult.value.name,
      categoryEditResult.value.description,
    );
  }
}

export default EditCategoryAdapter;
