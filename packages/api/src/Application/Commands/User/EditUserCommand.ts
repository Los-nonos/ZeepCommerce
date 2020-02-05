import UserCreateCommand from './UserCreateCommand';

class EditUserCommand extends UserCreateCommand {
  private userId: number;

  constructor(
    id: number,
    userName: string,
    userLastName: string,
    userDni: number,
    userAge: number,
    userBirthYear: number,
    userPassword: string,
    userPhoneNumber: number,
    userCellphoneNumber: number,
    userPhoneAreaCode: number,
    userCity: string,
    userState: string,
    userCountry: string,
    userEmail: string,
  ) {
    super(
      userName,
      userLastName,
      userDni,
      userAge,
      userBirthYear,
      userPassword,
      userPhoneNumber,
      userCellphoneNumber,
      userPhoneAreaCode,
      userCity,
      userState,
      userCountry,
      userEmail,
    );
    this.userId = id;
  }

  public getUserId() {
    return this.userId;
  }
}

export default EditUserCommand;
