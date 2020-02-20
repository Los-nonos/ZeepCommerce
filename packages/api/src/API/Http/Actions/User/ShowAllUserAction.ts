import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ShowAllUserAdapter from '../../Adapter/User/ShowAllUserAdapter';
import UserFindAllCommand from '../../../../Application/Commands/User/FindAllUsersCommand';
import FindAllUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/FindAllUsersHandlerInterface';
import User from '../../../../Domain/Entities/User';
import TYPES from '../../../../Infraestructure/DI/types';
import FindUserPresenter from '../../Presenters/User/FindUserPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class ShowAllUserAction {
  private adapter: ShowAllUserAdapter;
  private handler: FindAllUserHandlerInterface;

  constructor(
    @inject(ShowAllUserAdapter) adapter: ShowAllUserAdapter,
    @inject(TYPES.IFindAllUsersHandler) findUserHandler: FindAllUserHandlerInterface,
  ) {
    this.adapter = adapter;
    this.handler = findUserHandler;
  }

  public async execute(req: Request, res: Response) {
    const command: UserFindAllCommand = await this.adapter.from(req.params);
    const response: User[] = await this.handler.FindAllUsers(command);

    const presenter = new FindUserPresenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'FindUserAction: Users found successfully'));
  }
}

export default ShowAllUserAction;
