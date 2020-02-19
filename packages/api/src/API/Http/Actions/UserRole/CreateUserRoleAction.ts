import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Presenter from '../../Presenters/UserRole/CreateUserRolePresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import CreateUserRoleAdapter from '../../Adapter/UserRole/CreateUserRoleAdapter';
import CreateUserRoleHandler from '../../../../Application/Handlers/UserRole/CreateUserRoleHandler';
import CreateUserRoleCommand from '../../../../Application/Commands/UserRole/CreateUserRoleCommand';
import UserRole from '../../../../Domain/Entities/UserRole';

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
    const command: CreateUserRoleCommand = await this.adapter.from(req.body);
    const response: UserRole = await this.handler.execute(command);
    const presenter = new Presenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'UserRole created satisfully'));
  }
}

export default CreateUserRoleAction;
