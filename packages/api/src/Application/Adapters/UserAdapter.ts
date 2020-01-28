import { Request } from 'express';
import { injectable } from 'inversify';
import IdSchema from './Schemas/IdSchema';
import { UserCreateSchema, UserEditSchema } from './Schemas/UserSchema';
import { InvalidData } from '../../Infraestructure/ErrorsHandlers/Errors/InvalidData';
import UserFindCommand from '../../Domain/Commands/UserCommands/UserFindCommand';
import EditUserCommand from '../../Domain/Commands/UserCommands/EditUserCommand';
import UserCreateCommand from '../../Domain/Commands/UserCommands/UserCreateCommand';
import DeleteUserCommand from '../../Domain/Commands/UserCommands/DeleteUserCommand';
import UserAdapterInterface from '../../Infraestructure/Interfaces/UserInterfaces/UserAdapterInterface';
import FindAllUsersCommand from '../../Domain/Commands/UserCommands/FindAllUsersCommand';

@injectable()
class UserAdapter implements UserAdapterInterface {
  public async Create(req: Request): Promise<UserCreateCommand> {
    try {
      const createUserResult = UserCreateSchema.validate(req.body);
      if (createUserResult.error) {
        throw new Error(createUserResult.error.message);
      } else {
        return new UserCreateCommand(
          createUserResult.value.userName,
          createUserResult.value.userLastName,
          createUserResult.value.userDni,
          createUserResult.value.userAge,
          createUserResult.value.userBirthYear,
          createUserResult.value.userPassword,
          createUserResult.value.userPhoneNumber,
          createUserResult.value.userCellphoneNumber,
          createUserResult.value.userPhoneAreaCode,
          createUserResult.value.userCity,
          createUserResult.value.userState,
          createUserResult.value.userCountry,
          createUserResult.value.userEmail,
        );
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async Edit(req: Request): Promise<EditUserCommand> {
    try {
      const { id }: any = req.params;
      const editUserResult = UserEditSchema.validate(req.params.body);

      const resultId = IdSchema.validate({ userId: id });

      if (resultId.error) {
        throw new InvalidData('ID not valid or not found');
      }
      if (editUserResult.error) {
        throw new Error(editUserResult.error.message);
      } else {
        return new EditUserCommand(
          editUserResult.value.userId,
          editUserResult.value.userName,
          editUserResult.value.userLastName,
          editUserResult.value.userDni,
          editUserResult.value.userAge,
          editUserResult.value.userBirthYear,
          editUserResult.value.userPassword,
          editUserResult.value.userPhoneNumber,
          editUserResult.value.userCellphoneNumber,
          editUserResult.value.userPhoneAreaCode,
          editUserResult.value.userCity,
          editUserResult.value.userState,
          editUserResult.value.userCountry,
          editUserResult.value.userEmail,
        );
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async ShowById(req: Request): Promise<UserFindCommand> {
    const { id }: any = req.params;

    const resultId = IdSchema.validate({ id: id });

    if (resultId.error) {
      throw new InvalidData(resultId.error.message);
    }
    return new UserFindCommand(resultId.value.id);
  }

  public async ShowAllUsers(req: Request): Promise<FindAllUsersCommand> {
    let id = req.query.search;

    if (!id) {
      id = 0;
    } else {
      const idResult = IdSchema.validate({ id });
      if (idResult.error) {
        id = 0;
      }
    }
    return new FindAllUsersCommand(id);
  }

  public async Delete(req: Request): Promise<DeleteUserCommand> {
    const { id }: any = req.params;
    const resultId = IdSchema.validate({ id: id });

    if (resultId.error) {
      throw new Error(resultId.error.message);
    }
    return new DeleteUserCommand(resultId.value.id);
  }
}

export default UserAdapter;
