import { Request, Response } from 'express';

interface UserControllerInterface{
    Create(req: Request, res: Response): void;
}

export default UserControllerInterface