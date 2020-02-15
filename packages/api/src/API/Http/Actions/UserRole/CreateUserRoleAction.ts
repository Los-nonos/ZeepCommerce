import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Presenter from '../../Presenters/UserRole/CreateUserRolePresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import CreateUserRoleAdapter from '../../Adapter/UserRole/CreateUserRoleAdapter';
import CreateUserRoleHandler from '../../../../Application/Handlers/UserRole/CreateUserRoleHandler';

@injectable()
class CreateUserRoleAction {
  private adapter: CreateUserRoleAdapter;
  private handler: CreateUserRoleHandler;
  constructor(
    @inject(CreateUserRoleAdapter) adapter: CreateUserRoleAdapter,
    @inject(CreateUserRoleHandler) handler: CreateUserRoleHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }
  public async execute(req: Request, res: Response) {
    const command: any = this.adapter.from(req);
    const response: any = await this.handler.execute(command);
    const presenter = new Presenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'UserRole created satisfully'));
  }
}

export default CreateUserRoleAction;