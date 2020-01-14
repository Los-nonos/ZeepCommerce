import User from "../../Entity/User";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import FindUsercommand from '../../Commands/UserCommands/FindUserCommand';
import FindUserHandlerInterface from "../../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface";


class UserFindHandler implements FindUserHandlerInterface{
    constructor(){

    }

    public async FindUser(command: FindUsercommand){
        try{
            const searchedUser: User = await User.findOne({ where: {id : command.getId(), isBlocked: false}});
            
            if(searchedUser){
               return searchedUser;
            }else{
                throw new EntityNotFound('User not with id not found');
            }
        }
        catch(error){
            throw new DataBaseError(error);
        }
    }
}

export default UserFindHandler;