import { UserEditSchema } from '../../Validator/Schemas/UserSchema';
import { BadRequest } from '../../Errors/BadRequest';
import EditUserCommand from '../../../../Application/Commands/User/EditUserCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';
import { IdSchema } from '../../Validator/Schemas/Common';

@injectable()
class EditUserAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(body: any, params: any) {
    const errorId = this.validator.validate(params, IdSchema);
    const error = this.validator.validate(body, UserEditSchema);

    if (errorId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(errorId.details)));
    }

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }

    return new EditUserCommand(
      params.id,
      body.name,
      body.lastname,
      body.dni,
      body.age,
      body.birthYear,
      body.password,
      body.phoneNumber,
      body.cellphoneNumber,
      body.phoneAreaCode,
      body.city,
      body.state,
      body.country,
      body.email,
    );
  }
}

export default EditUserAdapter;
