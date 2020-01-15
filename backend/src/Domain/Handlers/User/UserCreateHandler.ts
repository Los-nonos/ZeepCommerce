import User from "../../Entity/User";

import UserCreateInterface from "../../../Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface";
import UserCreateCommand from "../../Commands/UserCommands/UserCreateCommand";
import { injectable } from "inversify";


@injectable()
class UserCreateHandler implements UserCreateInterface{

    constructor(){

    }

    public async Create(command: UserCreateCommand): Promise<string> {
        const name = command.getUserName();
        const lastname = command.getUserLastName();
        const dni = command.getUserDni();

        const user = new User();
        user.name = name;
        user.lastname = lastname;
        user.dni = dni;

        try{
            await user.save();
            return 'User created correctly';
        }catch(error){
            return error.message;
        }        
    }

}

export default UserCreateHandler;