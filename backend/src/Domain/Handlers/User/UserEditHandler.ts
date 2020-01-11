import EditUserCommand from "../../Commands/UserCommands/EditUserCommand";
import User from "../../Entity/User";
import { EntityNotFound } from "../../../Infraestructure/ErrorsHandlers/Errors/EntityNotFound";
import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";


class UserEditHandler{

    public async Edit(command: EditUserCommand){
        const user = await User.findOne(command.getUserId());
        try{
            if(!user){
                throw new EntityNotFound('User not found');
            }else{
                const userEdit = new User();
                userEdit.name = command.getUserName();
                userEdit.lastname = command.getUserLastName();
                
                await userEdit.save();
    
                return {message: 'User updated correctly!'};
            }
        }
        catch(error){
            throw new DataBaseError(error);
        }
    }
}

export default UserEditHandler;