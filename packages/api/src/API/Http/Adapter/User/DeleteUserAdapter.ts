import { Request } from 'express';
import { UserDeleteSchema } from '../../Validator/Schemas/UserSchema';
import { InvalidData } from '../../Errors/BadRequest';
import DeleteUserCommand from '../../../../Application/Commands/User/DeleteUserCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class DeleteUserAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: Request) {
    const error = this.validator.validator(req.query, UserDeleteSchema);

    if (error) {
      throw new InvalidData(JSON.stringify(error.details[0].message));
    }

    return new DeleteUserCommand(req.query.id);
  }
}

export default DeleteUserAdapter;
