import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import CategoryCreateHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryCreateHandlerInterface';
import { inject, injectable } from 'inversify';
import StoreProductAdapter from '../../Adapter/Category/StoreCategoryAdapter';
import CategoryCreateCommand from '../../../../Application/Commands/Category/CategoryCreateCommand';

@injectable()
class CreateCategoryAction{
    
    private handler: CategoryCreateHandlerInterface;
    private adapter: StoreProductAdapter;

    constructor(
        @inject(TYPES.ICategoryCreateHandler) handler: CategoryCreateHandlerInterface,
        @inject(StoreProductAdapter) adapter: StoreProductAdapter,
    ){
        this.handler = handler;
        this.adapter = adapter;
    }


    public async execute(req: Request, res: Response) {
        const command: CategoryCreateCommand = await this.adapter.from(req);
        const response: string = await this.handler.Handle(command);

        return res.status(200).json({ message: response });
  }
}

export default CreateCategoryAction