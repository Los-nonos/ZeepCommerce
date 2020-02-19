import { UserCreateSchema } from '../../Validator/Schemas/UserSchema';
import { BadRequest } from '../../Errors/BadRequest';
import UserCreateCommand from '../../../../Application/Commands/User/UserCreateCommand';
import Validator from '../../Validator/Validator';
import { inject } from 'inversify';

class StoreUserAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(body: any) {
    const error = this.validator.validate(body, UserCreateSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }
    return new UserCreateCommand(
      body.name,
      body.lastname,
      body.dni,
      body.age,
      body.birthyear,
      body.password,
      body.phoneNumber,
      body.cellPhoneNumber,
      body.areaCode,
      body.city,
      body.state,
      body.country,
      body.email,
    );
  }
}

export default StoreUserAdapter;
