import { Request, Response } from 'express';
import ProductCreateCommand from '../../Domain/Commands/ProductCommands/ProductCreateCommand';
import ProductEditCommand from '../../Domain/Commands/ProductCommands/ProductEditCommand';
import ProductDeleteCommand from '../../Domain/Commands/ProductCommands/ProductDeleteCommand';
import ProductFindCommand from '../../Domain/Commands/ProductCommands/ProductFindCommand';

interface ProductAdapterInterface {
  CreateAdapter(req: Request): Promise<ProductCreateCommand>;
  EditAdapter(req: Request): Promise<ProductEditCommand>;
  DeleteAdapter(req: Request): Promise<ProductDeleteCommand>;
  ShowAllAdapter(req: Request): Promise<ProductFindCommand>;
  ShowByIdAdapter(req: Request): Promise<ProductFindCommand>;
}

export default ProductAdapterInterface;
