import User from "../../../../Domain/Entities/User";
import IPresenter from "../Base/IPresenter";

class LoginPresenter implements IPresenter{
  private result: any;
  private token: string;

  public constructor(result: User, token: string) {
    this.result = result;
    this.token = token;
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }

  public getData(): object {
    return {
      id: this.result.getId(),
      username: this.result.getUsername(),
      name: this.result.getName(),
      surname: this.result.getSurname(),
      email: this.result.getEmail(),
      roles: this.result.getRolesFromUserRole(),
      token: this.token,
    };
  }
}

export default LoginPresenter;
