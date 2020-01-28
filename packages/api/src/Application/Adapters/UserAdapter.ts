import { Request } from 'express';
import { injectable } from 'inversify';
import { UserCreateSchema, UserEditSchema, UserDeleteSchema, FindUserSchema } from './Schemas/UserSchema';
import { InvalidData } from '../../Infraestructure/ErrorsHandlers/Errors/InvalidData';
import UserFindCommand from '../../Domain/Commands/UserCommands/UserFindCommand';
import EditUserCommand from '../../Domain/Commands/UserCommands/EditUserCommand';
import UserCreateCommand from '../../Domain/Commands/UserCommands/UserCreateCommand';
import DeleteUserCommand from '../../Domain/Commands/UserCommands/DeleteUserCommand';
import UserAdapterInterface from '../../Infraestructure/Interfaces/UserInterfaces/UserAdapterInterface';
import FindAllUsersCommand from '../../Domain/Commands/UserCommands/FindAllUsersCommand';
import { EntityNotFound } from '../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound';
import { DataBaseError } from '../../Infraestructure/ErrorsHandlers/Errors/DataBaseError';
import { NotFoundData } from '../../Infraestructure/ErrorsHandlers/Errors/NotFoundData';

@injectable()
class UserAdapter implements UserAdapterInterface {
  public async Create(req: Request): Promise<UserCreateCommand> {
    const createUserResult = UserCreateSchema.validate(req.body);
    if (createUserResult.error) {
      throw new Error(createUserResult.error.message);
    }
    if (createUserResult.error instanceof InvalidData) {
      throw new InvalidData(createUserResult.error.message);
    }
    if (createUserResult.error instanceof EntityNotFound) {
      throw new EntityNotFound(createUserResult.error.message);
    }
    if (createUserResult.error instanceof DataBaseError) {
      throw new DataBaseError(createUserResult.error.message);
    }
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

  public async Edit(req: Request): Promise<EditUserCommand> {
    const editUserResult = UserEditSchema.validate(req.params.body);

    if (editUserResult.id.error) {
      throw new InvalidData('ID not valid or not found');
    }
    if (editUserResult.error) {
      throw new Error(editUserResult.error.message);
    }
    if (editUserResult.error instanceof InvalidData) {
      throw new InvalidData(editUserResult.error.message);
    }
    if (editUserResult.error instanceof EntityNotFound) {
      throw new EntityNotFound(editUserResult.error.message);
    }
    if (editUserResult.error instanceof DataBaseError) {
      throw new DataBaseError(editUserResult.error.message);
    }
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

  public async ShowById(req: Request): Promise<UserFindCommand> {
    const findUserResult = FindUserSchema.validate(req.query.search);

    if (findUserResult.error instanceof InvalidData) {
      throw new InvalidData(findUserResult.error.message);
    }
    if (findUserResult.error instanceof NotFoundData) {
      throw new NotFoundData('ID not found in database');
    }
    if (findUserResult.error instanceof EntityNotFound) {
      throw new EntityNotFound(findUserResult.error.message);
    }
    return new UserFindCommand(findUserResult.value.id);
  }

  public async ShowAllUsers(req: Request): Promise<FindAllUsersCommand> {
    let id = req.query.search;
    const idUserResult = FindUserSchema.validate({ id });

    if (!id) {
      id = 0;
    } else {
      if (idUserResult.error) {
        id = 0;
      }
    }
    return new FindAllUsersCommand(idUserResult.value.id);
  }

  public async Delete(req: Request): Promise<DeleteUserCommand> {
    const deleteUserResult = UserDeleteSchema.validate(req.params);

    if (deleteUserResult.error instanceof InvalidData) {
      throw new InvalidData(deleteUserResult.error.message);
    }
    return new DeleteUserCommand(deleteUserResult.value.id);
  }
}

export default UserAdapter;
