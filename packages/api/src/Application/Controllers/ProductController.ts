import { Request, Response } from 'express';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface'
import { injectable, inject } from 'inversify';
import ProductAdapter from '../Adapters/ProductAdapter';
import ProductCreateHandler from '../../Domain/Handlers/Product/ProductCreateHandler';
import ProductEditHandler from '../../Domain/Handlers/Product/ProductEditHandler';
import ProductDeleteHandler from '../../Domain/Handlers/Product/ProductDeleteHandler';
import TYPES from '../../types';
import ProductCreateHandlerInterface from '../../Infraestructure/Interfaces/ProductCreateHandlerInterface';


@injectable()
class ProductController implements ProductControllerInterface {

    private productCreateHandle: ProductCreateHandlerInterface;

    public constructor(
        //@inject(TYPES.IProductCreateHandler) productCreateHandle: ProductCreateHandlerInterface

    ) {
        //this.productCreateHandle = productCreateHandle;
    }

    public async Create(req: Request, res: Response) {
        const adapter = new ProductAdapter();
        const handler = new ProductCreateHandler();

        try {
            const command = await adapter.CreateAdapter(req);

            const response = await handler.Handle(command);
            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async Edit(req: Request, res: Response) {
        const adapter = new ProductAdapter();
        const command = await adapter.EditAdapter(req);
        const handler = new ProductEditHandler();

        try {
            var response = await handler.Handle(command);
            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async Delete(req: Request, res: Response) {

        const adapter = new ProductAdapter();
        const handler = new ProductDeleteHandler();
        const command = await adapter.DeleteAdapter(req);

        try {
            const response = await handler.Handle(command);
            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ProductController;