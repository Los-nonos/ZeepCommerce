import { Request } from 'express';
import { FindUserSchema } from '../../Validator/Schemas/UserSchema';
import { BadRequest } from '../../Errors/BadRequest';
import UserFindCommand from '../../../../Application/Commands/User/UserFindCommand';
import { injectable } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class ShowUserAdapter {
  private readonly validator: Validator;
  public async from(req: Request) {
    const findUserResult = FindUserSchema.validate(req.query.search);

    if (findUserResult.error || findUserResult.errors) {
      throw new InvalidData(findUserResult.error.message || findUserResult.errors.message);
    }
    return new UserFindCommand(findUserResult.value.id);
  }
}

export default ShowUserAdapter;
