import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import CategoryEditHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryEditHandlerInterface';
import { inject, injectable } from 'inversify';
import EditProductAdapter from '../../Adapter/Category/EditCategoryAdapter';
import CategoryEditCommand from '../../../../Application/Commands/Category/CategoryEditCommand';

@injectable()
class EditCategoryAction{
    
    private handler: CategoryEditHandlerInterface;
    private adapter: EditProductAdapter;

    constructor(
        @inject(TYPES.ICategoryEditHandler) handler: CategoryEditHandlerInterface,
        @inject(EditProductAdapter) adapter: EditProductAdapter,
    ){
        this.handler = handler;
        this.adapter = adapter;
    }


    public async execute(req: Request, res: Response) {
        const command: CategoryEditCommand = await this.adapter.from(req);
        const response: string = await this.handler.Handle(command);

        return res.status(200).json({ message: response });
  }
}

export default EditCategoryAction