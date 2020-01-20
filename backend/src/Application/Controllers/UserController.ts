
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
import EditUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/EditUserHandlerInterface";
import DeleteUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface";
import FindUserHandlerInterface from "../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface";




@injectable()
class UserController implements UserControllerInterface{

    private ICreateUserHandler: CreateUserHandlerInterface;
    private IEditUserHandler: EditUserHandlerInterface;
    private IDeleteUserHandler: DeleteUserHandlerInterface;
    private IFindUserHandler: FindUserHandlerInterface;

    constructor(
        @inject(TYPES.ICreateUserHandler) createUserHandler: CreateUserHandlerInterface,
        @inject(TYPES.IEditUserHandler) editUserHandler: EditUserHandlerInterface,
        @inject(TYPES.IDeleteUserHandler) deleteUserHandler: DeleteUserHandlerInterface,
        @inject(TYPES.IFindUserHandler) findUserHandler: FindUserHandlerInterface,
    ) {
        this.ICreateUserHandler = createUserHandler;
        this.IEditUserHandler = editUserHandler;
        this.IDeleteUserHandler = deleteUserHandler;
        this.IFindUserHandler = findUserHandler;
    }

    public Create = async (req: Request, res: Response) => {
        const adapter = new UserAdapter();
        
        try {

            const command = await adapter.Create(req);
            const response = await this.ICreateUserHandler.Create(command);

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
            const response = await this.IEditUserHandler.Edit(command);
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

            const response = await this.IDeleteUserHandler.Delete(command);
            res.status(200).json({ message: response });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public ShowOne = async (req: Request, res: Response) => {

        try {
            const adapter = new UserAdapter();

            const command = await adapter.Show(req);
            const response = await this.IFindUserHandler.FindUser(command);

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