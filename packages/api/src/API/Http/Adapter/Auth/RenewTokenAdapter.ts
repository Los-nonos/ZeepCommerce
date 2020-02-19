import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import RenewTokenCommand from '../../../../Application/Commands/Auth/RenewTokenCommand';
import { RenewTokenSchema } from '../../Validator/Schemas/LoginSchema';

@injectable()
class RenewTokenAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public from(request: any): RenewTokenCommand {
    const error = this.validator.validate(request, RenewTokenSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }

    return new RenewTokenCommand(request.token);
  }
}

export default RenewTokenAdapter;
