import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import EditUserRoleCommand from '../../../../Application/Commands/UserRole/EditUserRoleCommand';
import { EditUserRoleSchema } from '../../Validator/Schemas/UserRoleSchema';
import { IdSchema } from '../../Validator/Schemas/Common';

@injectable()
class EditUserRoleAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(body: any, params: any): Promise<EditUserRoleCommand> {
    const error = this.validator.validate(body, EditUserRoleSchema);
    const errorId = this.validator.validate(params, IdSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }
    if (errorId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(errorId.details)));
    }
    return new EditUserRoleCommand(Number(params.id), body.name);
  }
}

export default EditUserRoleAdapter;
