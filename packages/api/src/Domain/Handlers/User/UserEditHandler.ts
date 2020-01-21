import EditUserCommand from "../../Commands/UserCommands/EditUserCommand";
import User from "../../Entity/User";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import EditUserHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/EditUserInterface';

class UserEditHandler implements EditUserHandlerInterface {
  public async Edit(command: EditUserCommand): Promise<string> {
    const user = await User.findOne(command.getUserId());
    try {
      if (!user) {
        throw new EntityNotFound("User not found");
      } else {
        user.name = command.getUserName();
        user.lastname = command.getUserLastName();

        await user.save();

        return "User updated correctly!";
      }
    } catch (error) {
      throw new DataBaseError(error);
    }
  }
}

export default UserEditHandler;
