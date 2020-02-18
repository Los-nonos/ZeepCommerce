import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import { inject } from 'inversify';
import LoginCommand from '../../../../Application/Commands/Auth/LoginCommand';
import { LoginSchema } from '../../Validator/Schemas/LoginSchema';

class LoginAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: any): Promise<LoginCommand> {
    const error = this.validator.validate(req, LoginSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }

    return new LoginCommand(req.username, req.password);
  }
}

export default LoginAdapter;
