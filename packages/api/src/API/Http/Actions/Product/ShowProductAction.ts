import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import Product from '../../../../Domain/Entities/Product';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import TYPES from '../../../../Infraestructure/DI/types';
import ProductFindHandlerInterface from '../../../../Infraestructure/Interfaces/Product/ProductFindHandlerInterface';
import ShowProductAdapter from '../../Adapter/Product/ShowProductAdapter';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import { success } from '../../Presenters/Base/success';
import FindByIdProductPresenter from '../../Presenters/Product/FindByIdProductsPresenter';

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
    const command: ProductFindCommand = await this.adapter.ShowByIdAdapter(req.params);
    const response: Product = await this.handler.FindOne(command);

    const presenter = new FindByIdProductPresenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'FindProductAction: product found successfully'));
  }
}

export default ShowProductAction;
