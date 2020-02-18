import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { BadRequest } from '../../Errors/BadRequest';
import ChangePasswordCommand from '../../../../Application/Commands/Auth/ChangePasswordCommand';
import { ChangePasswordSchema } from '../../Validator/Schemas/LoginSchema';

@injectable()
class ChangePasswordAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(req: any): Promise<ChangePasswordCommand> {
    const error = this.validator.validate(req, ChangePasswordSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }
    return new ChangePasswordCommand(req.username, req.password);
  }
}

export default ChangePasswordAdapter;
