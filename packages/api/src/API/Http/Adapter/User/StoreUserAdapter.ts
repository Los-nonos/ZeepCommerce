import { Request } from 'express';
import { UserCreateSchema } from '../../Validator/Schemas/UserSchema';
import { InvalidData } from '../../Errors/InvalidData';
import UserCreateCommand from '../../../../Application/Commands/User/UserCreateCommand';

class StoreUserAdapter {
  public async from(req: Request) {
    const createUserResult = UserCreateSchema.validate(req.body);

    if (createUserResult.error || createUserResult.errors) {
      throw new InvalidData(createUserResult.error.message || createUserResult.errors.message);
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
}

export default StoreUserAdapter;
