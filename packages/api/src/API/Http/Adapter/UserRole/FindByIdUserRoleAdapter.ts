import { Request } from 'express';
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
  public async from(params: any): Promise<FindByIdUserRoleCommand> {
    const error = this.validator.validate(params, IdSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }
    return new FindByIdUserRoleCommand(Number(params.id));
  }
}

export default FindByIdUserRoleAdapter;
