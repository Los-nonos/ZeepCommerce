import { Request, Response } from 'express';

interface ProductCreateHandlerInterface {

    Handle(req: Request): Promise <string>;
}

export default ProductCreateHandlerInterface;