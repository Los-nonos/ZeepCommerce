import User from "../../Domain/Entity/User";
import {Request, Response} from 'express';

class UserController{

    public static Create(req: Request, res: Response){
        const user = new User();
        user.Name = req.body.name;

        res.status(201).json({message: "user created", user})
    }
}

export default UserController;