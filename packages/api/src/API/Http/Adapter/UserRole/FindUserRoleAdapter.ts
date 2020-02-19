import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import FindUserRoleCommand from '../../../../Application/Commands/UserRole/FindUserRoleCommand';
import { FindUserRoleSchema } from '../../Validator/Schemas/UserRoleSchema';

@injectable()
class FindUserRoleAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(params: any): Promise<FindUserRoleCommand> {
    const error = this.validator.validate(params, FindUserRoleSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }
    return new FindUserRoleCommand(params.name);
  }
}

export default FindUserRoleAdapter;
