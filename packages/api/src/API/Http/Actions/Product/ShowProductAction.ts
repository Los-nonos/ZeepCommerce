import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import Product from '../../../../Domain/Entities/Product';
import ProductFindCommand from '../../../../Domain/Commands/ProductCommands/ProductFindCommand';
import TYPES from '../../../../Infraestructure/types';
import ProductFindHandlerInterface from '../../../../Infraestructure/Interfaces/ProductFindHandlerInterface';

@injectable()
class ShowProductAction {
  private adapter: any;
  private handler: any;
  constructor(
    @inject(TYPES.IProductFindHandler) handler: ProductFindHandlerInterface,
    @inject(ShowProductAdapter) adapter: ShowProductAdapter,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }
  
  public async execute(req: Request, res: Response) {
    const command: ProductFindCommand = await this.adapter.ShowByIdAdapter(req);
    const response: string | Product = await this.handler.FindOne(command);

    res.status(200).json({ message: 'Product found', product: response });
  }
}

export default ShowProductAction;
