import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import CreateUserRoleCommand from '../../../../Application/Commands/UserRole/CreateUserRoleCommand';
import { CreateUserRoleSchema } from '../../Validator/Schemas/UserRoleSchema';

@injectable()
class CreateUserRoleAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(body: any): Promise<CreateUserRoleCommand> {
    const error = this.validator.validate(body, CreateUserRoleSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }
    return new CreateUserRoleCommand(body.name);
  }
}

export default CreateUserRoleAdapter;
