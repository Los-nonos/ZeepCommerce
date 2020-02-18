import { Request, Response } from 'express';
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
  public async from(req: Request): Promise<EditUserRoleCommand> {
    const error = this.validator.validate(req.body, EditUserRoleSchema);
    const errorId = this.validator.validate(req.params, IdSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }
    if (errorId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(errorId)));
    }
    return new EditUserRoleCommand(Number(req.params.id), req.body.name);
  }
}

export default EditUserRoleAdapter;
