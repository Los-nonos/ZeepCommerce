import EditUserCommand from "../../../Domain/Commands/UserCommands/EditUserCommand";

interface EditUserHandlerInterface {
  Edit(command: EditUserCommand): Promise<string>;
}

export default EditUserHandlerInterface;
