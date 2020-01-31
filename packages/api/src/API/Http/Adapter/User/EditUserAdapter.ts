import { Request } from 'express';
import {UserEditSchema} from '../../Validator/Schemas/UserSchema';
import {InvalidData} from '../../Errors/InvalidData';
import EditUserCommand from '../../../../Domain/Commands/User/EditUserCommand';

class EditUserAdapter {
  public async from(req: Request) {
    const editUserResult = UserEditSchema.validate(req.params.body);

    if (editUserResult.error || editUserResult.errors) {
      throw new InvalidData(editUserResult.error.message || editUserResult.errors.message);
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
}

export default EditUserAdapter;