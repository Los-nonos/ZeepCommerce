import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ProductFindCommand from '../../../../Domain/Commands/ProductCommands/ProductFindCommand';
import Product from '../../../../Domain/Entities/Product';
import ShowAllProductAdapter from '../../Adapter/Product/ShowAllProductAdapter';
import ShowAllProductHandler from '../../../../Application/Handlers/Product/ProductFindHandler';
import TYPES from '../../../../Infraestructure/types';

class ShowAllProductAction {
  private adapter: ShowAllProductAdapter;
  private handler: ShowAllProductHandler;

  constructor(
    @inject(TYPES.IProductFindHandler) handler: ShowAllProductHandler,
    @inject(ShowAllProductAdapter) adapter: ShowAllProductAdapter,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command: ProductFindCommand = await this.adapter.ShowAllAdapter(req);
    const response: string | Product[] = await this.handler.FindAll(command);

    res.status(200).json({ message: 'Products in database', product: response });
  }
}

export default ShowAllProductAction;
