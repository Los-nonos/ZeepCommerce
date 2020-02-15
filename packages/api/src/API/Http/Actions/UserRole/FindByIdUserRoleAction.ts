import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Presenter from '../../Presenters/UserRole/FindByIdUserRolePresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import FindByIdUserRoleAdapter from '../../Adapters/UserRole/FindByIdUserRoleAdapter';
import FindByIdUserRoleHandler from '../../../../Application/Handlers/UserRole/FindByIdUserRoleHandler';

@injectable()
class FindByIdUserRoleAction {
  private adapter: FindByIdUserRoleAdapter;
  private handler: FindByIdUserRoleHandler;
  constructor(
    @inject(FindByIdUserRoleAdapter) adapter: FindByIdUserRoleAdapter,
    @inject(FindByIdUserRoleHandler) handler: FindByIdUserRoleHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }
  public async execute(req: Request, res: Response) {
    const command: any = this.adapter.from(req);
    const response: any = await this.handler.execute(command);
    const presenter = new Presenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'UserRole found'));
  }
}

export default FindByIdUserRoleAction;
