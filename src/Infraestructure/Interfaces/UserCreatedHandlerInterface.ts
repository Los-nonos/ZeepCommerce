import { Request, Response } from "express";

interface UserCreatedHandlerInterface{
    Handle(req: Request, res: Response): Promise<void>;
}

export default UserCreatedHandlerInterface;