import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ShowUserAdapter from '../../Adapter/User/ShowUserAdapter';
import UserFindCommand from '../../../../Application/Commands/User/UserFindCommand';
import FindUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/FindUserHandlerInterface';
import User from '../../../../Domain/Entities/User';
import TYPES from '../../../../Infraestructure/DI/types';
import FindByIdUserPresenter from '../../Presenters/User/FindByIdUserPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class ShowUserAction {
  private adapter: ShowUserAdapter;
  private handler: FindUserHandlerInterface;

  constructor(
    @inject(ShowUserAdapter) adapter: ShowUserAdapter,
    @inject(TYPES.IFindUserHandler) findUserHandler: FindUserHandlerInterface,
  ) {
    this.adapter = adapter;
    this.handler = findUserHandler;
  }

  public async execute(req: Request, res: Response) {
    const command: UserFindCommand = await this.adapter.from(req.params);
    const response: User = await this.handler.FindUser(command);

    const presenter = new FindByIdUserPresenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'FindByIdUserAction: User found successfully'));
  }
}

export default ShowUserAction;
