import { Request, Response } from 'express';

interface ProductDeleteHandlerInterface{

    Handle(req: Request, res: Response): Promise <string>;
}

export default ProductDeleteHandlerInterface;

