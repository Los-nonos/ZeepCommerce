import User from "../../Entity/User";
import DeleteUserCommand from '../../Commands/UserCommands/DeleteUserCommand';
import { injectable } from "inversify";
import DeleteUserHandlerInterface from "../../../Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface";

@injectable()
class UserDeleteHandler implements DeleteUserHandlerInterface{

    constructor() {

    }

    public async Delete(command: DeleteUserCommand): Promise<string> {
        const id = command.getId();

        const user = await User.findOne({ Id: id });

        if (!user) {
            throw new Error('User not found.');
        }
        try {
            await user.remove();
            return "User deleted.";
        } catch (error) {
            return error.message;
        }
    }
}

export default UserDeleteHandler;