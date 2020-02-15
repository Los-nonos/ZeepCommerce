import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Presenter from '../../Presenters/UserRole/FindUserRolePresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import FindUserRoleAdapter from '../../Adapters/UserRole/FindUserRoleAdapter';
import FindUserRoleHandler from '../../../../Application/Handlers/UserRole/FindUserRoleHandler';

@injectable()
class FindUserRoleAction {
  private adapter: FindUserRoleAdapter;
  private handler: FindUserRoleHandler;
  constructor(
    @inject(FindUserRoleAdapter) adapter: FindUserRoleAdapter,
    @inject(FindUserRoleHandler) handler: FindUserRoleHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }
  public async execute(req: Request, res: Response) {
    const command: any = this.adapter.from(req);
    const response: any = await this.handler.execute(command);
    const presenter = new Presenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'UserRoles founds'));
  }
}

export default FindUserRoleAction;
