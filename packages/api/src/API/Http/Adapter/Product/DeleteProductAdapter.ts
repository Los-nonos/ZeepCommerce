import { injectable } from "inversify";
import { Request } from "express";
import ProductDeleteCommand from "../../../../Domain/Commands/ProductCommands/ProductDeleteCommand";


@injectable()
class DeleteProductAdapter{

    public async from(req: Request): Promise<ProductDeleteCommand> {
        throw new Error();
    }

}

export default DeleteProductAdapter;