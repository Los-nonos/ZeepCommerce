import User from "../../Entity/User";
import CreateUserCommand from '../../Commands/UserCommands/CreateUserCommand';
class UserCreateHandler{

    constructor(){

    }
    public async Create(command: any): Promise<string> {
        const { name, lastname, dni, age, borndate, phone, address, account }: any = command;

        const user = new User();
        user.name = name;
        user.lastname = lastname;
        try{
            await user.save();
        }catch(error){
            return error.message;
        }        
    }

}

export default UserCreateHandler;