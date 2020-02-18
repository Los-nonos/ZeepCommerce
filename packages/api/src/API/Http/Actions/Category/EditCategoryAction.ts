import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/DI/types';
import CategoryEditHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryEditHandlerInterface';
import { inject, injectable } from 'inversify';
import EditProductAdapter from '../../Adapter/Category/EditCategoryAdapter';
import CategoryEditCommand from '../../../../Application/Commands/Category/CategoryEditCommand';
import Category from '../../../../Domain/Entities/Category';
import EditCategoryAdapter from '../../Adapter/Category/EditCategoryAdapter';
import CategoryEditPresenter from '../../Presenters/Category/CategoryEditPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class EditCategoryAction {
  private handler: CategoryEditHandlerInterface;
  private adapter: EditCategoryAdapter;

  constructor(
    @inject(TYPES.ICategoryEditHandler) handler: CategoryEditHandlerInterface,
    @inject(EditCategoryAdapter) adapter: EditCategoryAdapter,
  ) {
    this.handler = handler;
    this.adapter = adapter;
  }

  public async execute(req: Request, res: Response) {
    const command: CategoryEditCommand = await this.adapter.from(req.body, req.params);
    const response: Category = await this.handler.Handle(command);
    const presenter = new CategoryEditPresenter(response);

    return res
      .status(HTTP_CODES.OK)
      .json(success(presenter.getData(), 'EditCategoryAction: Category updated successfully'));
  }
}

export default EditCategoryAction;
