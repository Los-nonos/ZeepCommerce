import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ProductCreateCommand from '../../../../Domain/Commands/ProductCommands/ProductEditCommand';
import ProductEditHandlerInterface from '../../../../Infraestructure/Interfaces/ProductEditHandlerInterface';
import EditProductAdapter from '../../Adapter/Product/EditProductAdapter';

@injectable()
class EditProductAction {
  private handler: ProductEditHandlerInterface;
  private adapter: EditProductAdapter;
  constructor(
    @inject(TYPES.IProductEditHandler) handler: ProductEditHandlerInterface,
    @inject(EditProductAdapter) adapter: EditProductAdapter,
  ) {
    this.handler = handler;
    this.adapter = adapter;
  }

  public async execute(req: Request, res: Response) {
    const command: ProductCreateCommand = await this.adapter.CreateAdapter(req);
    const response: string = await this.handler.Handle(command);

    res.status(200).json({ message: response });
  }
}

export default EditProductAction;