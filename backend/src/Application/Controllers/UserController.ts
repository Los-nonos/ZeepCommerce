
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
import DeleteUserCommand from "../../Domain/Commands/UserCommands/DeleteUserCommand";
import UserFindHandler from "../../Domain/Handlers/User/UserFindHandler";
import ProductDeleteHandler from "../../Domain/Handlers/Product/ProductDeleteHandler";
import UserEditHandler from "../../Domain/Handlers/User/UserEditHandler";
import UserCreateHandler from "../../Domain/Handlers/User/UserCreateHandler";
import UserDeleteHandler from "../../Domain/Handlers/User/UserDeleteHandler";




@injectable()
class UserController{

    private createUserHandler: UserCreateHandler;
    private editUserHandler: UserEditHandler;
    private deleteUserHandler: UserDeleteHandler;
    private findUserHandler: UserFindHandler;

    constructor(
        @inject(UserCreateHandler) createUserHandler: UserCreateHandler,
        @inject(UserEditHandler) editUserHandler: UserEditHandler,
        @inject(UserCreateHandler) deleteUserHandler: UserDeleteHandler,
        @inject(UserFindHandler) findUserHandler: UserFindHandler,
    ) {
        this.createUserHandler = createUserHandler;
        this.editUserHandler = editUserHandler;
        this.deleteUserHandler = deleteUserHandler;
        this.findUserHandler = findUserHandler;
    }

    public Create = async (req: Request, res: Response) => {
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

    public Edit = async (req: Request, res: Response) => {
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

    public Delete = async (req: Request, res: Response) => {
        const adapter = new UserAdapter();

        try {
            const command = await adapter.Delete(req);

            const response = await this.deleteUserHandler.Delete(command);
            res.status(200).json({ message: response });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public ShowOne = async (req: Request, res: Response) => {

        try {
            const adapter = new UserAdapter();

            const command = await adapter.Show(req);
            const response = await this.findUserHandler.FindUser(command);

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