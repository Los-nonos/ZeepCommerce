
import { Request, Response } from "express";
import User from "../../Domain/Entity/User";
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import { injectable } from "inversify";
import UserAdapter from "../Adapters/UserAdapter";
import UserDeleteHandler from "../../Domain/Handlers/User/UserDeleteHandler";

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
}

export default UserController;