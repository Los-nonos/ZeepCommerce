import User from "../../Entity/User";
import UserDeleteCommand from '../../Commands/UserCommands/UserCommand';

class UserDeleteHandler{

    constructor(){

    }

    public async Delete(command: UserDeleteCommand): Promise<string>{
        const id = command.getId();

        const user = await User.findOne({Id:id});

        if(!user){
            throw new Error('User not found.');
        }

        try{
            await user.remove();
            return "User deleted.";
        } catch(error){
            return error.message;
        }
    }
}

export default UserDeleteHandler;