import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ProductEditCommand from '../../../../Application/Commands/Product/ProductEditCommand';
import ProductEditHandlerInterface from '../../../../Infraestructure/Interfaces/Product/ProductEditHandlerInterface';
import EditProductAdapter from '../../Adapter/Product/EditProductAdapter';
import TYPES from '../../../../Infraestructure/DI/types';
import EditProductPresenter from '../../Presenters/Product/EditProductPresenter';
import Product from '../../../../Domain/Entities/Product';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

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
    const command: ProductEditCommand = await this.adapter.from(req.body, req.params);
    const response: Product = await this.handler.Handle(command);

    const presenter = new EditProductPresenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'EditProductAction: product updated successfully'));
  }
}

export default EditProductAction;
