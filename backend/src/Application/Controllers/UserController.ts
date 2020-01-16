
//Dependencies imports
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import TYPES from '../../types';
//Error imports
import { InfraestructureError } from "../../Infraestructure/ErrorsHandlers/Errors/InfraestructureError";
import { ApplicationError } from '../../Infraestructure/ErrorsHandlers/Errors/AppError';

//Handlers
import UserAdapter from "../Adapters/UserAdapter";

//Interfaces
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import CreateUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface";
import EditUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/EdiUserHandlerInterface";
import DeleteUserCommand from "../../Domain/Commands/UserCommands/DeleteUserCommand";
import DeleteUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface";
import UserFindHandler from "../../Domain/Handlers/User/UserFindHandler";
import FindUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface";
import ProductDeleteHandler from "../../Domain/Handlers/Product/ProductDeleteHandler";




@injectable()
class UserController implements UserControllerInterface {

    private createUserHandler: CreateUserHandlerInterface;
    private editUserHandler: EditUserHandlerInterface;
    private deleteUserHandler: DeleteUserHandlerInterface;
    private findeUserHandler: FindUserHandlerInterface;

    constructor(
        @inject(TYPES.IUserCreateHandler) createUserHandler: CreateUserHandlerInterface,
        @inject(TYPES.IUserEditHandler) editUserHandler: EditUserHandlerInterface,
        @inject(TYPES.IUserCreateHandler) deleteUserHandler: DeleteUserHandlerInterface,
        @inject(TYPES.IUserFindHandler) findeUserHandler: FindUserHandlerInterface,
    ) {
        this.createUserHandler = createUserHandler;
        this.editUserHandler = editUserHandler;
        this.deleteUserHandler = deleteUserHandler;
        this.findeUserHandler = findeUserHandler;
    }

    public async Create(req: Request, res: Response) {
        const adapter = new UserAdapter();
        
        try {

            const command = await adapter.Create(req);
            const response = await this.createUserHandler.Create(command);

            res.status(201).json({ message: response });
        }
        catch (error) {
            if (error instanceof InfraestructureError) {
                res.status(error.getStatusCode()).json({ message: error.message });
            }
            else if (error instanceof ApplicationError) {
                res.status(500).json({ message: error.getDescription });
            }
            else {
                res.status(500).json({ message: "Unexpected error" });
            }
        }
    }

    public async Edit(req: Request, res: Response) {
        const adapter = new UserAdapter();
        try {
            const command = await adapter.Edit(req);
            const response = await this.editUserHandler.Edit(command);
            res.status(200).json({ message: "User updated correctly", user: response });
        }
        catch (error) {
            if (error instanceof InfraestructureError) {
                res.status(error.getStatusCode()).json({ message: error.message });
            }
            else if (error instanceof ApplicationError) {
                res.status(500).json({ message: error.getDescription });
            }
            else {
                res.status(500).json({ message: "Unexpected error" });
            }
        }
    }

    public async Delete(req: Request, res: Response) {
        const adapter = new UserAdapter();

        try {
            const command = await adapter.Delete(req);

            const response = await this.deleteUserHandler.Delete(command);
            res.status(200).json({ message: response });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async ShowOne(req: Request, res: Response) {
        const adapter = new UserAdapter();

        try {
            const command = await adapter.Show(req);
            const response = await this.findeUserHandler.FindUser(command);

            res.status(200).json({ message: "User found", user: response });
        } catch (error) {
            if (error instanceof InfraestructureError) {
                res.status(error.getStatusCode()).json({ message: error.message });
            }
            else if (error instanceof ApplicationError) {
                res.status(500).json({ message: error.getDescription });
            }
            else {
                res.status(500).json({ message: 'Unexpected error' });
            }
        }
    }
}

export default UserController;