import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import FindUserRoleCommand from '../../../../Application/Commands/UserRole/FindUserRoleCommand';
import FindUserRoleSchema from '../../Validator/Schemas/UserRoleSchema';

@injectable()
class FindUserRoleAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(req: Request): Promise<FindUserRoleCommand> {
    const error = this.validator.validate(req.params, FindUserRoleSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }
    return new FindUserRoleCommand(req.body);
  }
}

export default FindUserRoleAdapter;
