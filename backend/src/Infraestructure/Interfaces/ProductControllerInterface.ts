import { Request, Response } from 'express';

interface ProductControllerInterface{

    Create(req: Request, res: Response): void;
    Edit(req: Request, res: Response): void
    Delete(req: Request, res: Response): void;
    
}

export default ProductControllerInterface;