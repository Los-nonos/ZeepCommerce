import { Request, Response } from 'express';

interface ProductEditHandlerInterface{

    Handle(req: Request, res: Response): Promise <string>;
}

export default ProductEditHandlerInterface;