import EditUserCommand from "../../Commands/UserCommands/EditUserCommand";
import User from "../../Entity/User";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import { injectable } from "inversify";
import EditUserHandlerInterface from "../../../Infraestructure/Interfaces/UserInterfaces/EditUserHandlerInterface";

@injectable()
class UserEditHandler implements EditUserHandlerInterface{

    constructor(){
        
    }

    public async Edit(command: EditUserCommand): Promise<User> {
        const user = await User.findOne(command.getUserId());
        try {
            if (!user) {
                throw new EntityNotFound('User not found');
            } else {
                user.name = command.getUserName();
                user.lastname = command.getUserLastName();

                await user.save();

                return user;
            }
        }
        catch (error) {
            throw new DataBaseError(error);
        }
    }
}

export default UserEditHandler;