import User from "../../domain/Entity/User";
import { Request, Response } from 'express';

class UserController {

    public static Create(req: Request, res: Response): void {
        const user = new User();
        user.name = req.body.name;

        // user.save();

        res.status(201).json({ message: 'user created', user });
    }
}

export default UserController;