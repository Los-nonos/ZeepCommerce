import User from "../../Entity/User";
import { injectable } from "inversify";

import { DataBaseError } from "../../../Infraestructure/ErrorsHandlers/Errors/DataBaseError";
import { NotFoundData } from "../../../Infraestructure/ErrorsHandlers/Errors/NotFoundData";
import FindAllUsersHandlerInterface from "../../../Infraestructure/Interfaces/UserInterfaces/FindAllUsersHandlerInterface";

@injectable()
class FindAllUsersHandler implements FindAllUsersHandlerInterface {

    constructor(){

    }

    public async FindAllUsers(): Promise<User[]>{

        try {
            const users: User[] = await User.find({ where:{ limit: 10 } });
            
            return users;
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