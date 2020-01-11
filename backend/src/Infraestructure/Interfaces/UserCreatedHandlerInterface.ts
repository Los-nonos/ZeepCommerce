import { Request, Response } from "express";

interface UserCreatedHandlerInterface{
    Create(req: Request, res: Response): Promise<void>;
}

export default UserCreatedHandlerInterface;