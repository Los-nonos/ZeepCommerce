import { Request } from "express";
import NameSchema from "./Schemas/NameSchema";
import DniSchema from "./Schemas/DniSchema";
import UserDeleteCommand from "../../Domain/Commands/UserCommands/UserCommand";
import IdSchema from "./Schemas/IdSchema";
import { InvalidData } from "../../Infraestructure/ErrorsHandlers/Errors/InvalidData";
import ShowUsercommand from "../../Domain/Commands/UserCommands/ShowUserCommand";

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
    }
    

    public Edit(req: Request) {
        const { id }: any = req.params;
        const resultId = IdSchema.validate({ id: id});
    }

    public Show(req: Request){
        const { id } = req.params;

        const resultId = IdSchema.validate({ id });

        if(resultId.error){
            throw new InvalidData(resultId.error.message);
        }
        return new ShowUsercommand(resultId.value);
    }

    public Delete(req: Request): UserDeleteCommand{
        const { id }: any = req.params;
        const resultId = IdSchema.validate({ id : id}) ;

        if(resultId.error){
            throw new Error(resultId.error.message);
        }
        
        return new UserDeleteCommand(resultId.value);
    }
}

export default UserAdapter;