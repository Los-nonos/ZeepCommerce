import { injectable } from "inversify";
import User from "../../Entity/User";
import UnAuthorizedException from "../../../Infraestructure/ErrorsHandlers/Errors/UnAuthorizedException";
import { useContainer, Entity } from "typeorm";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import ShowUsercommand from "../../Commands/UserCommands/FindUserCommand";


class UserShowHandler{
    constructor(){

    }

    public async Show(command: ShowUsercommand){
        try{
            const searchedUser: User = await User.findOne({ where: {id : command.GetId(), isBlocked: false}});
            
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

export default UserShowHandler;