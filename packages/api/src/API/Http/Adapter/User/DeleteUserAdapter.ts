import { Request } from 'express';
import { UserDeleteSchema } from '../../Validator/Schemas/UserSchema';
import { InvalidData } from '../../Errors/InvalidData';
import DeleteUserCommand from '../../../../Domain/Commands/UserCommands/DeleteUserCommand';
import { injectable } from 'inversify';

@injectable()
class DeleteUserAdapter {
  public async from(req: Request) {
    const deleteUserResult = UserDeleteSchema.validate(req.params);

    if (deleteUserResult.error || deleteUserResult.errors) {
      throw new InvalidData(deleteUserResult.error.message || deleteUserResult.errors.message);
    }

    return new DeleteUserCommand(deleteUserResult.value.id);
  }
}

export default DeleteUserAdapter;