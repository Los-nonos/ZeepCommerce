import { Request, Response } from 'express';
import ProductCreateCommand from "../../Domain/Commands/ProductCommands/ProductCreateCommand";
import ProductEditCommand from "../../Domain/Commands/ProductCommands/ProductEditCommand";
import ProductDeleteCommand from "../../Domain/Commands/ProductCommands/ProductDeleteCommand";


interface ProductAdapterInterface {

    CreateAdapter(req: Request): Promise <ProductCreateCommand>;
    EditAdapter(req: Request): Promise <ProductEditCommand>;
    DeleteAdapter(req: Request): Promise <ProductDeleteCommand>
}

export default ProductAdapterInterface;