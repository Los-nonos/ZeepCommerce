import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import CategoryCreateHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryCreateHandlerInterface';
import { inject, injectable } from 'inversify';
import CategoryCreateCommand from '../../../../Application/Commands/Category/CategoryCreateCommand';
import Category from '../../../../Domain/Entities/Category';
import CategoryCreatePresenter from '../../Presenter/Category/CategoryCreatePresenter';
import StoreCategoryAdapter from '../../Adapter/Category/StoreCategoryAdapter';

@injectable()
class CreateCategoryAction{
    
    private handler: CategoryCreateHandlerInterface;
    private adapter: StoreCategoryAdapter;

    constructor(
        @inject(TYPES.ICategoryCreateHandler) handler: CategoryCreateHandlerInterface,
        @inject(StoreCategoryAdapter) adapter: StoreCategoryAdapter,
    ){
        this.handler = handler;
        this.adapter = adapter;
    }


    public async execute(req: Request, res: Response) {
        const command: CategoryCreateCommand = await this.adapter.from(req);
        const response: Category = await this.handler.Handle(command);
        const presenter = new CategoryCreatePresenter(response);

        return res.status(200).json(presenter.getData());
  }
}

export default CreateCategoryAction