import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import ProductCreateHandlerInterface from '../../../../Infraestructure/Interfaces/ProductCreateHandlerInterface';
import { inject, injectable } from 'inversify';
import StoreProductAdapter from '../../Adapter/Product/StoreProductAdapter';
import ProductCreateCommand from '../../../../Domain/Commands/Product/ProductCreateCommand';

@injectable()
class StoreProductAction {
  private handler: ProductCreateHandlerInterface;
  private adapter: StoreProductAdapter;

  constructor(
    @inject(TYPES.IProductCreateHandler) handler: ProductCreateHandlerInterface,
    @inject(StoreProductAdapter) adapter: StoreProductAdapter,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command: ProductCreateCommand = await this.adapter.from(req);
    const response: string = await this.handler.Handle(command);

    return res.status(200).json({ message: response });
  }
}

export default StoreProductAction;
