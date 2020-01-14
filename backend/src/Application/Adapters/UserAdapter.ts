import { Request } from "express";
import NameSchema from "./Schemas/NameSchema";
import DniSchema from "./Schemas/DniSchema";
import IdSchema from "./Schemas/IdSchema";
import { InvalidData } from "../../Infraestructure/ErrorsHandlers/Errors/InvalidData";
import UserFindCommand from "../../Domain/Commands/UserCommands/FindUserCommand";
import EditUserCommand from "../../Domain/Commands/UserCommands/EditUserCommand";
import UserCreateCommand from '../../Domain/Commands/UserCommands/UserCreateCommand';
import DeleteUserCommand from "../../Domain/Commands/UserCommands/DeleteUserCommand";

class UserAdapter {

    public Create(req: Request) {
        const { name, lastname, dni, age, borndate, phone, address, account }: any = req.body;

        const resultName = NameSchema.validate(name, NameSchema);
        if (resultName.error) {
            throw new Error(resultName.error.message);
        }
        const resultLastName = NameSchema.validate({ name: lastname });
        if (resultLastName.error) {
            throw new Error(resultLastName.error.message);
        }
        const resultDNI = DniSchema.validate({dni: dni});
        if (resultDNI.error){
            throw new Error(resultDNI.error.message);
        }    
        return new UserCreateCommand(resultName.value, resultLastName.value,resultDNI.value)
    }

    public Edit(req: Request) {
        const { id }: any = req.params;
        const { name, lastName, dni } : any = req.body;

        const resultId = IdSchema.validate({ id: id});

        if(resultId.error){
            throw new InvalidData('ID not valid or not found');
        }
        else{
            return new EditUserCommand(resultId.value,name, lastName, dni);
        }
    }

    public Show(req: Request){
        const { id } = req.params;

        const resultId = IdSchema.validate({ id });

        if(resultId.error){
            throw new InvalidData(resultId.error.message);
        }
        return new UserFindCommand(resultId.value);
    }

    public Delete(req: Request): DeleteUserCommand{
        const { id }: any = req.params;
        const resultId = IdSchema.validate({ id : id}) ;

        if(resultId.error){
            throw new Error(resultId.error.message);
        }
        return new DeleteUserCommand(resultId.value);
    }
}

export default UserAdapter;