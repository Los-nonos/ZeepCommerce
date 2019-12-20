
import { Request, Response } from "express";
import User from "../../Domain/Entity/User";
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import { injectable } from "inversify";

@injectable()
class UserController implements UserControllerInterface {

    public Create(req: Request, res: Response) {
        const { name }: any = req.body;

        if (!name) {
            res.status(400).json({ message: 'not name found' });
        }

        const user = new User();
        user.name = name;

        res.status(201).json({ message: 'user created', user });
    }
}

export default UserController;