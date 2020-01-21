import User from "../../../Domain/Entity/User";
import UserFindCommand from "../../../Domain/Commands/UserCommands/UserFindCommand";

interface FindAllUsersHandlerInterface{
    FindAllUsers(req: UserFindCommand): Promise<User[]>;
}

export default FindAllUsersHandlerInterface;