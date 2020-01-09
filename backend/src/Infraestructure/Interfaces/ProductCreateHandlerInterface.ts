import { Request, Response } from 'express';

interface ProductCreateHandlerInterface {

    Handle(req: Request, res: Response): Promise <void>;
}

export default ProductCreateHandlerInterface;