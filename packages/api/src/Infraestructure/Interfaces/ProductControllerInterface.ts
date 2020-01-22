import { Request, Response } from 'express';
import Product from '../../Domain/Entity/Product';

interface ProductControllerInterface {
  Create(req: Request, res: Response): Promise<void>;
  Edit(req: Request, res: Response): Promise<void>;
  Delete(req: Request, res: Response): Promise<void>;
  ShowAll(req: Request, res: Response): Promise<void>;
  ShowById(req: Request, res: Response): Promise<void>;
}

export default ProductControllerInterface;
