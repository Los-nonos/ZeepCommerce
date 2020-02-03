import { Request } from 'express';
import Validator from '../../Validator/Validator';
import { InvalidData } from '../../Errors/InvalidData';
import { inject } from 'inversify';
import LoginCommand from '../../../../Application/Commands/Auth/LoginCommand';
import { LoginSchema } from '../../Validator/Schemas/LoginSchema';

class LoginAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public from(req: Request): LoginCommand {
    const error = this.validator.validator(req.body, LoginSchema);

    if (error) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(error)));
    }

    return new LoginCommand(req.body.username, req.body.password);
  }
}

export default LoginAdapter;
