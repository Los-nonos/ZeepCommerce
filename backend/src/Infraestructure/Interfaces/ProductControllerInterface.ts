import { Request, Response } from "express";

interface ProductControllerInterface{

    Create(req: Request, res: Response): Promise <void>;
    Edit(req: Request, res: Response): Promise <void>;
    Delete(req: Request, res: Response): Promise <void>
}

export default ProductControllerInterface;