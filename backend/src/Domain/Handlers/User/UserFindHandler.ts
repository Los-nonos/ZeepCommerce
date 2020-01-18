import User from "../../Entity/User";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import UserFindcommand from '../../Commands/UserCommands/UserFindCommand';
import { injectable } from "inversify";


@injectable()
class UserFindHandler {
    constructor() {

    }

    public async FindUser(command: UserFindcommand) {
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