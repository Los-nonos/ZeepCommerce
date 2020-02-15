import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import DeleteUserRoleCommand from '../../../../Application/Commands/UserRole/DeleteUserRoleCommand';
import { IdSchema } from '../../Validator/Schemas/Common';

@injectable()
class DeleteUserRoleAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(req: Request): Promise<DeleteUserRoleCommand> {
    const error = this.validator.validate(req.params, IdSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }
    return new DeleteUserRoleCommand(Number(req.params.id));
  }
}

export default DeleteUserRoleAdapter;
