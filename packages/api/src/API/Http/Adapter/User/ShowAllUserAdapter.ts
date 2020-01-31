import { Request } from 'express';
import { FindUserSchema } from '../../Validator/Schemas/UserSchema';
import { InvalidData } from '../../Errors/InvalidData';
import UserFindCommand from '../../../../Domain/Commands/UserCommands/FindAllUsersCommand';
import { injectable } from 'inversify';

@injectable()
class ShowAllUserAdapter {
  public async from(req: Request) {
    const findUserResult = FindUserSchema.validate(req.query.search);

    if (findUserResult.error || findUserResult.errors) {
      throw new InvalidData(findUserResult.error.message || findUserResult.errors.message);
    }
    return new UserFindCommand(findUserResult.value.id);
  }
}

export default ShowAllUserAdapter;