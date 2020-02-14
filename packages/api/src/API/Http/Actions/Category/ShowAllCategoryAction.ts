import { Request, Response } from 'express';
import TYPES from '../../../../Infraestructure/types';
import CategoryFindHandlerInterface from '../../../../Infraestructure/Interfaces/Category/CategoryFindHandlerInterface';
import { inject, injectable } from 'inversify';
import ShowAllCategoryAdapter from '../../Adapter/Category/ShowAllCategoryAdapter';
import Category from '../../../../Domain/Entities/Category';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import CategoryFindAllPresenter from '../../Presenter/Category/CategoryFindAllPresenter';

@injectable()
class ShowAllCategoryAction{
    
    private handler: CategoryFindHandlerInterface;
    private adapter: ShowAllCategoryAdapter;

    constructor(
        @inject(TYPES.ICategoryFindHandler) handler: CategoryFindHandlerInterface,
        @inject(ShowAllCategoryAdapter) adapter: ShowAllCategoryAdapter,
    ){
        this.handler = handler;
        this.adapter = adapter;
    }


    public async execute(req: Request, res: Response) {
        const command: CategoryFindCommand = await this.adapter.from(req);
        const response: Category[] = await this.handler.HandleFindAll(command);
        const presenter = new CategoryFindAllPresenter(response);

        return res.status(200).json(presenter.getData());
  }
}

export default ShowAllCategoryAction