import { FindUserSchema } from '../../Validator/Schemas/UserSchema';
import { BadRequest } from '../../Errors/BadRequest';
import UserFindCommand from '../../../../Application/Commands/User/FindAllUsersCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class ShowAllUserAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(params: any) {
    const error = this.validator.validate(params, FindUserSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }
    return new UserFindCommand(params.id);
  }
}

export default ShowAllUserAdapter;
