import User from "../../Entity/User";
import { injectable, id } from "inversify";

import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import { NotFoundData } from "../../../Infraestructure/ErrorsHandlers/Errors/NotFoundData";
import UserFindCommand from "../../Commands/UserCommands/UserFindCommand";
import FindAllUsersHandlerInterface from "../../../Infraestructure/Interfaces/UserInterfaces/FindAllUsersHandlerInterface";

@injectable()
class FindAllUsersHandler implements FindAllUsersHandlerInterface {

    constructor(){

    }

    public async FindAllUsers(command: UserFindCommand): Promise<User[]>{
        try {
            const userId = command.getId();
            if (userId === -1) {
                return await User.find({ where:{ limit: 20 } })
            }
        }
        catch(error){
            if(error instanceof DataBaseError){
                throw new DataBaseError('DB error');
            }
            else if(error instanceof NotFoundData){
                throw new NotFoundData('There are any users registered in database.');
            }
        }
        
    }
}
export default FindAllUsersHandler;