
import { Request, Response } from "express";
import User from "../../Domain/Entity/User";
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import { injectable } from "inversify";
import UserAdapter from "../Adapters/UserAdapter";
import UserDeleteHandler from "../../Domain/Handlers/User/UserDeleteHandler";
import {InfraestructureError} from "../../Infraestructure/ErrorsHandlers/Errors/InfraestructureError";
import {ApplicationError} from '../../Infraestructure/ErrorsHandlers/Errors/AppError';
import UserShowHandler from "../../Domain/Handlers/User/UserShowHandler";
import UserEditHandler from "../../Domain/Handlers/User/UserEditHandler";

@injectable()
class UserController implements UserControllerInterface {

    public async Create(req: Request, res: Response) {
        const { name, lastname }: any = req.body;

        if (!name) {
            res.status(400).json({ message: 'Name not found' });
        }

        if (!lastname) {
            res.status(400).json({ message: 'Last Name not found' });
        }

        const user = new User();
        user.name = name;
        user.lastname = lastname;

        try {
            await user.save();

            res.status(201).json({ message: 'User created', user });    
        } catch (error) {
            res.sendStatus(500);
        }
    }

    public async Edit(req: Request, res: Response){
        const adapter = new UserAdapter();
        const handler = new UserEditHandler();
        const command = adapter.Edit(req);
    }

    public async Delete(req: Request, res: Response) {
        
        const adapter = new UserAdapter();
        const handler = new UserDeleteHandler();
        const command = adapter.Delete(req);

        try {
            const response = await handler.Delete(command);
            res.status(200).json({message: response});    
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    public async ShowOne(req: Request, res: Response){
        const adapter = new UserAdapter();  
        const handler = new UserShowHandler();
        const command = adapter.Show(req);

        try{
            const response = await handler.Show(command);
            res.status(200).json({message: "User found", user: response});
        }catch(error){
            if(error instanceof InfraestructureError){
                res.status(error.getStatusCode()).json({message: error.message});
            }
            else if(error instanceof ApplicationError){
                res.status(500).json({ message: error.getDescription});
            }
            else{
                res.status(500).json({ message: 'Unexpected error'});
            }
        }
    }
}

export default UserController;