import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Presenter from '../../Presenters/Auth/ChangePasswordPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import ChangePasswordAdapter from '../../Adapter/Auth/ChangePasswordAdapter';
import ChangePasswordHandler from '../../../../Application/Handlers/Auth/ChangePasswordHandler';

@injectable()
class ChangePasswordAction {
  private adapter: ChangePasswordAdapter;
  private handler: ChangePasswordHandler;

  constructor(
    @inject(ChangePasswordAdapter) adapter: ChangePasswordAdapter,
    @inject(ChangePasswordHandler) handler: ChangePasswordHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command: any = this.adapter.from(req);
    const { user, message } = await this.handler.execute(command);

    const presenter = new Presenter(user);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), message));
  }
}

export default ChangePasswordAction;
