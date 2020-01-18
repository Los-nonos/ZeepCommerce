import { Request, Response } from 'express';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface'
import { injectable, inject } from 'inversify';

import TYPES from '../../types';
import ProductAdapterInterface from '../../Infraestructure/Interfaces/ProductAdapterInterface';
import ProductCreateHandlerInterface from '../../Infraestructure/Interfaces/ProductCreateHandlerInterface';
import ProductEditHandlerInterface from '../../Infraestructure/Interfaces/ProductEditHandlerInterface';
import ProductDeleteHandlerInterface from '../../Infraestructure/Interfaces/ProductDeleteHandlerInterface';

@injectable()
class ProductController implements ProductControllerInterface {

    private productAdapter: ProductAdapterInterface;
    private productCreateHandler: ProductCreateHandlerInterface;
    private productEditHandler: ProductEditHandlerInterface;
    private productDeleteHandler: ProductDeleteHandlerInterface;

    public constructor(
        @inject(TYPES.IProductAdapter) productAdapter: ProductAdapterInterface,
        @inject(TYPES.IProductCreateHandler) productCreateHandler: ProductCreateHandlerInterface,
        @inject(TYPES.IProductEditHandler) productEditHandler: ProductEditHandlerInterface,
        @inject(TYPES.IProductDeleteHandler) productDeleteHandler: ProductDeleteHandlerInterface

    ) {
        this.productAdapter = productAdapter;
        this.productCreateHandler = productCreateHandler;
        this.productEditHandler = productEditHandler;
        this.productDeleteHandler = productDeleteHandler;
    }

    public Create = async (req: Request, res: Response) => {

        try {
            const command = await this.productAdapter.CreateAdapter(req);
            const response = await this.productCreateHandler.Handle(command);
            
            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public Edit = async (req: Request, res: Response) => {

        try {
            const command = await this.productAdapter.EditAdapter(req);
            const response = await this.productEditHandler.Handle(command);

            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public Delete = async (req: Request, res: Response) => {

        try {
            const command = await this.productAdapter.DeleteAdapter(req);
            const response = await this.productDeleteHandler.Handle(command);

            res.status(200).json({ message: response });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ProductController;