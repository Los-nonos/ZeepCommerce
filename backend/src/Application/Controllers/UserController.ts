
import { Request, Response } from "express";
import User from "../../Domain/Entity/User";
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import { injectable } from "inversify";
import UserAdapter from "../Adapters/UserAdapter";
import UserDeleteHandler from "../../Domain/Handlers/User/UserDeleteHandler";
import {InfraestructureError} from "../../Infraestructure/ErrorsHandlers/Errors/InfraestructureError";
import {ApplicationError} from '../../Infraestructure/ErrorsHandlers/Errors/AppError';
import UserShowHandler from "../../Domain/Handlers/User/UserShowHandler";

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
        
    }

    public async Delete(req: Request, res: Response) {
        
        var adapter = new UserAdapter();
        var handler = new UserDeleteHandler();
        var command = adapter.Delete(req);

        try {
            var response = await handler.Delete(command);
            res.status(200).json({message: response});    
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    public async ShowOne(req: Request, res: Response){
        try{
            var adapter = new UserAdapter();  
            
            var handler = new UserShowHandler();

            var command = adapter.Show(req);

            res.status(200).json({message: "User found", user: Response});
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