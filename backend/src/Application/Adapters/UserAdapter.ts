import { Request } from "express";
import { injectable } from "inversify";
import NameSchema from "./Schemas/NameSchema";
import DniSchema from "./Schemas/DniSchema";
import IdSchema from "./Schemas/IdSchema";
import { InvalidData } from "../../Infraestructure/ErrorsHandlers/Errors/InvalidData";
import UserFindCommand from "../../Domain/Commands/UserCommands/UserFindCommand";
import EditUserCommand from "../../Domain/Commands/UserCommands/EditUserCommand";
import UserCreateCommand from '../../Domain/Commands/UserCommands/UserCreateCommand';
import DeleteUserCommand from "../../Domain/Commands/UserCommands/DeleteUserCommand";
import UserAdapterInterface from "../../Infraestructure/Interfaces/UserInterfaces/UserAdapterInterface";
import FindAllUsersCommand from "../../Domain/Commands/UserCommands/FindAllUsersCommand";

@injectable()
class UserAdapter implements UserAdapterInterface {

    public async Create(req: Request): Promise<UserCreateCommand> {
        const { name, lastname, dni, age, borndate, phone, address, account }: any = req.body;

        const resultName = NameSchema.validate({ name: name });
        if (resultName.error) {
            throw new Error(resultName.error.message);
        }
        const resultLastName = NameSchema.validate({ name: lastname });
        if (resultLastName.error) {
            throw new Error(resultLastName.error.message);
        }
        const resultDNI = DniSchema.validate({ dni: dni });
        if (resultDNI.error) {
            throw new Error(resultDNI.error.message);
        }

        return new UserCreateCommand(resultName.value.name, resultLastName.value.name, resultDNI.value.dni);
    }

    public async Edit(req: Request): Promise<EditUserCommand> {
        const { id }: any = req.params;
        const { name, lastName, dni }: any = req.body;

        const resultId = IdSchema.validate({ id: id });

        if (resultId.error) {
            throw new InvalidData('ID not valid or not found');
        }
        else {
            return new EditUserCommand(resultId.value.id, name, lastName, dni);
        }
    }

    public async ShowById(req: Request): Promise<UserFindCommand> {
        const { id }: any = req.params;

        const resultId = IdSchema.validate({ id: id });

        if (resultId.error) {
            throw new InvalidData(resultId.error.message);
        }
        return new UserFindCommand(resultId.value.id);
    }

    public async ShowAllUsers(req: Request): Promise<FindAllUsersCommand> {
        let id = req.query.search;
        
        if(!id){
            id = 0;
        }else{
            const idResult = IdSchema.validate({ id });
            if (idResult.error) {
                id = 0;
            }
        }
        return new FindAllUsersCommand(id);
    }

    public async Delete(req: Request): Promise<DeleteUserCommand> {
        const { id }: any = req.params;
        const resultId = IdSchema.validate({ id: id });

        if (resultId.error) {
            throw new Error(resultId.error.message);
        }
        return new DeleteUserCommand(resultId.value.id);
    }
}

export default UserAdapter;