
import { Request, Response } from "express";
import User from "../../Domain/Entity/User";
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import { injectable } from "inversify";

@injectable()
class UserController implements UserControllerInterface {

    public async Create(req: Request, res: Response) {
        const { name, lastname }: any = req.body;

        if (!name) {
            res.status(400).json({ message: 'not name found' });
        }

        if (!lastname) {
            res.status(400).json({ message: 'not lastname found' });
        }

        const user = new User();
        user.name = name;
        user.lastname = lastname;

        try {
            await user.save();

            res.status(201).json({ message: 'user created', user });    
        } catch (error) {
            res.sendStatus(500);
        }
    }
}

export default UserController;