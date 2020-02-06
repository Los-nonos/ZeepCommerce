import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import CategoryDeleteHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryDeleteHandlerInterface';
import { inject, injectable } from 'inversify';
import DeleteProductAdapter from '../../Adapter/Category/DeleteCategoryAdapter';
import CategoryDeleteCommand from '../../../../Application/Commands/Category/CategoryDeleteCommand';

@injectable()
class DeleteCategoryAction{
    
    private handler: CategoryDeleteHandlerInterface;
    private adapter: DeleteProductAdapter;

    constructor(
        @inject(TYPES.ICategoryDeleteHandler) handler: CategoryDeleteHandlerInterface,
        @inject(DeleteProductAdapter) adapter: DeleteProductAdapter,
    ){
        this.handler = handler;
        this.adapter = adapter;
    }


    public async execute(req: Request, res: Response) {
        const command: CategoryDeleteCommand = await this.adapter.from(req);
        const response: string = await this.handler.Handle(command);

        return res.status(200).json({ message: response });
  }
}

export default DeleteCategoryAction