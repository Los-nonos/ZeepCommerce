import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import FindByIdUserRoleCommand from '../../../../Application/Commands/UserRole/FindByIdUserRoleCommand';
import { IdSchema } from '../../Validator/Schemas/Common';

@injectable()
class FindByIdUserRoleAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(req: Request): Promise<FindByIdUserRoleCommand> {
    const error = this.validator.validate(req.params, IdSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }
    return new FindByIdUserRoleCommand(req.body);
  }
}

export default FindByIdUserRoleAdapter;
