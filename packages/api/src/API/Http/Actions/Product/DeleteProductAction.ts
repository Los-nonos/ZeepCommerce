import { Request, Response } from 'express';
import ProductDeleteHandlerInterface from '../../../../Infraestructure/Interfaces/Product/ProductDeleteHandlerInterface';
import DeleteProductAdapter from '../../Adapter/Product/DeleteProductAdapter';
import { inject, injectable } from 'inversify';
import ProductDeleteCommand from '../../../../Application/Commands/Product/ProductDeleteCommand';
import TYPES from '../../../../Infraestructure/types';

@injectable()
class DeleteProductAction {
  private handler: ProductDeleteHandlerInterface;
  private adapter: DeleteProductAdapter;
  constructor(
    @inject(TYPES.IProductDeleteHandler) handler: ProductDeleteHandlerInterface,
    @inject(DeleteProductAdapter) adapter: DeleteProductAdapter,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command: ProductDeleteCommand = await this.adapter.from(req);
    const response: string = await this.handler.Handle(command);

    return res.status(200).json({ message: response });
  }
}

export default DeleteProductAction;
