import { Request, Response } from 'express';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface';
import { injectable, inject } from 'inversify';

import Product from '../../Domain/Entities/Product';

import TYPES from '../../types';
import ProductAdapterInterface from '../../Infraestructure/Interfaces/ProductAdapterInterface';
import ProductCreateHandlerInterface from '../../Infraestructure/Interfaces/ProductCreateHandlerInterface';
import ProductEditHandlerInterface from '../../Infraestructure/Interfaces/ProductEditHandlerInterface';
import ProductDeleteHandlerInterface from '../../Infraestructure/Interfaces/ProductDeleteHandlerInterface';

import ProductCreateCommand from '../../Domain/Commands/ProductCommands/ProductCreateCommand';
import ProductEditCommand from '../../Domain/Commands/ProductCommands/ProductEditCommand';
import ProductDeleteCommand from '../../Domain/Commands/ProductCommands/ProductDeleteCommand';
import ProductFindCommand from '../../Domain/Commands/ProductCommands/ProductFindCommand';
import ProductFindHandlerInterface from '../../Infraestructure/Interfaces/ProductFindHandlerInterface';

@injectable()
class ProductController implements ProductControllerInterface {
  private productAdapter: ProductAdapterInterface;
  private productCreateHandler: ProductCreateHandlerInterface;
  private productEditHandler: ProductEditHandlerInterface;
  private productDeleteHandler: ProductDeleteHandlerInterface;
  private productFindHandler: ProductFindHandlerInterface;

  public constructor(
    @inject(TYPES.IProductAdapter) productAdapter: ProductAdapterInterface,
    @inject(TYPES.IProductCreateHandler) productCreateHandler: ProductCreateHandlerInterface,
    @inject(TYPES.IProductEditHandler) productEditHandler: ProductEditHandlerInterface,
    @inject(TYPES.IProductDeleteHandler) productDeleteHandler: ProductDeleteHandlerInterface,
    @inject(TYPES.IProductFindHandler) productFindHandler: ProductFindHandlerInterface,
  ) {
    this.productAdapter = productAdapter;
    this.productCreateHandler = productCreateHandler;
    this.productEditHandler = productEditHandler;
    this.productDeleteHandler = productDeleteHandler;
    this.productFindHandler = productFindHandler;
  }

  public Create = async (req: Request, res: Response) => {
    try {
      const command: ProductCreateCommand = await this.productAdapter.CreateAdapter(req);
      const response: string = await this.productCreateHandler.Handle(command);

      res.status(200).json({ message: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public Edit = async (req: Request, res: Response) => {
    try {
      const command: ProductEditCommand = await this.productAdapter.EditAdapter(req);
      const response: string = await this.productEditHandler.Handle(command);

      res.status(200).json({ message: 'Product updated correctly', product: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public Delete = async (req: Request, res: Response) => {
    try {
      const command: ProductDeleteCommand = await this.productAdapter.DeleteAdapter(req);
      const response: string = await this.productDeleteHandler.Handle(command);

      res.status(200).json({ message: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public ShowAll = async (req: Request, res: Response) => {
    try {
      const command: ProductFindCommand = await this.productAdapter.ShowAllAdapter(req);
      const response: string | Product[] = await this.productFindHandler.FindAll(command);

      res.status(200).json({ message: 'Products in database', product: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public ShowById = async (req: Request, res: Response) => {
    try {
      const command: ProductFindCommand = await this.productAdapter.ShowByIdAdapter(req);
      const response: string | Product = await this.productFindHandler.FindOne(command);

      res.status(200).json({ message: 'Product found', product: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default ProductController;
