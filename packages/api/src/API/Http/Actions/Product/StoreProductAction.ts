import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/DI/types';
import ProductCreateHandlerInterface from '../../../../Infraestructure/Interfaces/Product/ProductCreateHandlerInterface';
import { inject, injectable } from 'inversify';
import StoreProductAdapter from '../../Adapter/Product/StoreProductAdapter';
import ProductCreateCommand from '../../../../Application/Commands/Product/ProductCreateCommand';
import Product from '../../../../Domain/Entities/Product';
import CreateProductPresenter from '../../Presenters/Product/CreateProductPresenter';
import { success } from '../../Presenters/Base/success';

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
    const response: Product = await this.handler.Handle(command);

    const presenter = new CreateProductPresenter(response);

    return res.status(200).json(success(presenter.getData(), 'CreateProductAction: product created successfully'));
  }
}

export default StoreProductAction;
