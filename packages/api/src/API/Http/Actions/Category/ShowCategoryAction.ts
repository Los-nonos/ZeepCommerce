import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import CategoryFindHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryFindHandlerInterface';
import { inject, injectable } from 'inversify';
import ShowCategoryAdapter from '../../Adapter/Category/ShowCategoryAdapter';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import Category from '../../../../Domain/Entities/Category';
import CategoryFindByIdPresenter from '../../Presenter/Category/CategoryFindByIdPresenter';

@injectable()
class ShowCategoryAction {
  private handler: CategoryFindHandlerInterface;
  private adapter: ShowCategoryAdapter;

  constructor(
    @inject(TYPES.ICategoryFindHandler) handler: CategoryFindHandlerInterface,
    @inject(ShowCategoryAdapter) adapter: ShowCategoryAdapter,
  ) {
    this.handler = handler;
    this.adapter = adapter;
  }

  public async execute(req: Request, res: Response) {
    const command: CategoryFindCommand = await this.adapter.from(req);
    const response: Category = await this.handler.HandleFindById(command);
    const presenter = new CategoryFindByIdPresenter(response);

    return res.status(200).json(presenter.getData());
  }
}

export default ShowCategoryAction;
