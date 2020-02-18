import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import Product from '../../../../Domain/Entities/Product';
import ShowAllProductAdapter from '../../Adapter/Product/ShowAllProductAdapter';
import TYPES from '../../../../Infraestructure/DI/types';
import ProductFindHandlerInterface from '../../../../Infraestructure/Interfaces/Product/ProductFindHandlerInterface';

@injectable()
class ShowAllProductAction {
  private adapter: ShowAllProductAdapter;
  private handler: ProductFindHandlerInterface;

  constructor(
    @inject(TYPES.IProductFindHandler) handler: ProductFindHandlerInterface,
    @inject(ShowAllProductAdapter) adapter: ShowAllProductAdapter,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command: ProductFindCommand = await this.adapter.from(req);
    const response: Product[] = await this.handler.FindAll(command);

    res.status(200).json({ message: 'Products in database', product: response });
  }
}

export default ShowAllProductAction;
