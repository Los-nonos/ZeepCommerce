import { Request, Response } from 'express';

interface UserControllerInterface {
  Create(req: Request, res: Response): Promise<void>;
  Edit(req: Request, res: Response): Promise<void>;
  Delete(req: Request, res: Response): Promise<void>;
  ShowOne(req: Request, res: Response): Promise<void>;
}

export default UserControllerInterface;
