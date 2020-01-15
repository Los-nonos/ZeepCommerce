import User from "../../Entity/User";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import FindUsercommand from '../../Commands/UserCommands/FindUserCommand';
import FindUserHandlerInterface from "../../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface";
import { injectable } from "inversify";


@injectable()
class UserFindHandler implements FindUserHandlerInterface {
    constructor() {

    }

    public async FindUser(command: FindUsercommand) {
        try {
            const id = command.getId();
            console.log(id);
            const searchedUser: User | undefined = await User.findOne({ Id: id });

            if (searchedUser) {
                return searchedUser;
            } else {
                throw new EntityNotFound('User not with id not found');
            }
        }
        catch (error) {
            throw new DataBaseError(error.message);
        }
    }
}

export default UserFindHandler;