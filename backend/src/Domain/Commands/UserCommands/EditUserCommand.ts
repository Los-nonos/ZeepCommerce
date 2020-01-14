import UserCreateCommand from './UserCreateCommand';
import EditUserHandlerInterface from '../../../Infraestructure/Interfaces/UserInterfaces/EditUserInterface';

class EditUserCommand extends UserCreateCommand{

    private userId: number;
    
    constructor(id:number, name: string, lastName: string, dni:number){
        super(name,lastName,dni);
        this.userId = id;
    }

    public getUserId(){
        return this.userId;
    }
}

export default EditUserCommand;