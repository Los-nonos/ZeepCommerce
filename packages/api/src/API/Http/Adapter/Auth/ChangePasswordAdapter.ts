import { Request } from 'express';
import { inject, injectable } from 'inversify';
import Validator from '../../Validator/Validator';
import { InvalidData } from '../../Errors/InvalidData';
import ChangePasswordCommand from '../../../../Application/Commands/Auth/ChangePasswordCommand';
import { ChangePasswordSchema } from '../../Validator/Schemas/LoginSchema';

@injectable()
class ChangePasswordAdapter {
  private validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }
  public async from(req: Request): Promise<ChangePasswordCommand> {
    const error = this.validator.validator(req.body, ChangePasswordSchema);
    if (error) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(error)));
    }
    return new ChangePasswordCommand(req.body.username, req.body.password);
  }
}

export default ChangePasswordAdapter;
