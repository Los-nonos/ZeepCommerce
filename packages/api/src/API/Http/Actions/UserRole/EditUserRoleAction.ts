import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Presenter from '../../Presenters/UserRole/EditUserRolePresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import EditUserRoleAdapter from '../../Adapter/UserRole/EditUserRoleAdapter';
import EditUserRoleHandler from '../../../../Application/Handlers/UserRole/EditUserRoleHandler';

@injectable()
class EditUserRoleAction {
  private adapter: EditUserRoleAdapter;
  private handler: EditUserRoleHandler;
  constructor(
    @inject(EditUserRoleAdapter) adapter: EditUserRoleAdapter,
    @inject(EditUserRoleHandler) handler: EditUserRoleHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }
  public async execute(req: Request, res: Response) {
    const command: any = this.adapter.from(req);
    const response: any = await this.handler.execute(command);
    const presenter = new Presenter(response);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'UserRole updated satisfully'));
  }
}

export default EditUserRoleAction;
