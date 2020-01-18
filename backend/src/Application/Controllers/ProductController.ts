import { Request, Response } from 'express';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface'
import { injectable, inject } from 'inversify';

import TYPES from '../../types';
import ProductAdapter from '../Adapters/ProductAdapter';
import ProductCreateHandlerInterface from '../../Infraestructure/Interfaces/ProductCreateHandlerInterface';
import ProductEditHandlerInterface from '../../Infraestructure/Interfaces/ProductEditHandlerInterface';
import ProductDeleteHandlerInterface from '../../Infraestructure/Interfaces/ProductDeleteHandlerInterface';

import ProductDeleteHandler from '../../Domain/Handlers/Product/ProductDeleteHandler';
import ProductEditHandler from '../../Domain/Handlers/Product/ProductEditHandler';
import ProductCreateHandler from '../../Domain/Handlers/Product/ProductCreateHandler';


@injectable()
class ProductController implements ProductControllerInterface {

    private productAdapter: ProductAdapter;
    private productCreateHandler: ProductCreateHandlerInterface;
    private productEditHandler: ProductEditHandlerInterface;
    private productDeleteHandler: ProductDeleteHandlerInterface;

    public constructor(
        //productAdapter: ProductAdapter,
        @inject(TYPES.IProductCreateHandler) productCreateHandler: ProductCreateHandlerInterface,
        @inject(TYPES.IProductEditHandler) productEditHandler: ProductEditHandlerInterface,
        @inject(TYPES.IProductDeleteHandler) productDeleteHandler: ProductDeleteHandlerInterface

    ) {
        //this.productAdapter = productAdapter;
        this.productCreateHandler = productCreateHandler;
        this.productEditHandler = productEditHandler;
        this.productDeleteHandler = productDeleteHandler;
    }

    public Create = async (req: Request, res: Response) => {

        try {
            const adapter = new ProductAdapter();
            //const handler = new ProductCreateHandler();

            //const command = await this.productAdapter.CreateAdapter(req);
            //const response = await handler.Handle(command);
            const command = await adapter.CreateAdapter(req);
            const response = await this.productCreateHandler.Handle(command);
            
            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public Edit = async (req: Request, res: Response) => {

        try {
            const adapter = new ProductAdapter();
            //const handler = new ProductEditHandler();

            //const command = await this.productAdapter.EditAdapter(req);
            //var response = await handler.Handle(command);
            const command = await adapter.EditAdapter(req);
            const response = await this.productEditHandler.Handle(command);

            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public Delete = async (req: Request, res: Response) => {

        try {
            const adapter = new ProductAdapter();
            //const handler = new ProductDeleteHandler();

            //const command = await this.productAdapter.DeleteAdapter(req);
            //const response = await handler.Handle(command);
            const command = await adapter.DeleteAdapter(req);
            const response = await this.productDeleteHandler.Handle(command);

            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ProductController;