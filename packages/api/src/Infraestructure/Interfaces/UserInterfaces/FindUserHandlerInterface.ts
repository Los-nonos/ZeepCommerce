import FindUserCommand from "../../../Domain/Commands/UserCommands/FindUserCommand";

interface FindUserHandlerInterface {
  FindUser(command: FindUserCommand): Promise<Object>;
}

export default FindUserHandlerInterface;
