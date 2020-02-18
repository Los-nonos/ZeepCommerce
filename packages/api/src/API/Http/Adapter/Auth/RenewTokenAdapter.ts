import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { Request } from 'express';
import { InvalidData } from '../../Errors/BadRequest';
import RenewTokenCommand from '../../../../Application/Commands/Auth/RenewTokenCommand';
import { RenewTokenSchema } from '../../Validator/Schemas/LoginSchema';

@injectable()
class RenewTokenAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public from(request: Request): RenewTokenCommand {
    const error = this.validator.validator(request.body, RenewTokenSchema);

    if (error) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(error.details)));
    }

    return new RenewTokenCommand(request.body.token);
  }
}

export default RenewTokenAdapter;
