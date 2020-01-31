class UserCreateCommand {
  private userName: string;
  private userLastName: string;
  private userDni: number;
  private userAge: number;
  private userBirthYear: number;
  private userPassword: string;
  private userPhoneNumber: number;
  private userCellphoneNumber: number;
  private userPhoneAreaCode: number;
  private userCity: string;
  private userState: string;
  private userCountry: string;
  private userEmail: string;

  public constructor(
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
    this.userName = userName;
    this.userLastName = userLastName;
    this.userDni = userDni;
    this.userAge = userAge;
    this.userBirthYear = userBirthYear;
    this.userPassword = userPassword;
    this.userPhoneNumber = userPhoneNumber;
    this.userCellphoneNumber = userCellphoneNumber;
    this.userPhoneAreaCode = userPhoneAreaCode;
    this.userCity = userCity;
    this.userState = userState;
    this.userCountry = userCountry;
    this.userEmail = userEmail;
  }
  public getUserName() {
    return this.userName;
  }

  public getUserLastName() {
    return this.userLastName;
  }
  public getUserDni() {
    return this.userDni;
  }
  public getUserAge() {
    return this.userAge;
  }
  public getUserBirthYear() {
    return this.userBirthYear;
  }
  public getUserPassword() {
    return this.userPassword;
  }
  public getUserPhoneNumber() {
    return this.userPhoneNumber;
  }
  public getUserCellphoneNumber() {
    return this.userCellphoneNumber;
  }
  public getUserPhoneAreaCode() {
    return this.userPhoneAreaCode;
  }
  public getUserCity() {
    return this.userCity;
  }
  public getUserState() {
    return this.userState;
  }
  public getUserCountry() {
    return this.userCountry;
  }
  public getUserEmail() {
    return this.userEmail;
  }
}
export default UserCreateCommand;
