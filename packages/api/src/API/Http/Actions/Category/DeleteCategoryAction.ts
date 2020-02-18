import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/DI/types';
import CategoryDeleteHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryDeleteHandlerInterface';
import { inject, injectable } from 'inversify';
import CategoryDeleteCommand from '../../../../Application/Commands/Category/CategoryDeleteCommand';
import DeleteCategoryAdapter from '../../Adapter/Category/DeleteCategoryAdapter';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class DeleteCategoryAction {
  private handler: CategoryDeleteHandlerInterface;
  private adapter: DeleteCategoryAdapter;

  constructor(
    @inject(TYPES.ICategoryDeleteHandler) handler: CategoryDeleteHandlerInterface,
    @inject(DeleteCategoryAdapter) adapter: DeleteCategoryAdapter,
  ) {
    this.handler = handler;
    this.adapter = adapter;
  }

  public async execute(req: Request, res: Response) {
    const command: CategoryDeleteCommand = await this.adapter.from(req);
    await this.handler.Handle(command);

    return res.status(HTTP_CODES.NO_CONTENT).end();
  }
}

export default DeleteCategoryAction;
