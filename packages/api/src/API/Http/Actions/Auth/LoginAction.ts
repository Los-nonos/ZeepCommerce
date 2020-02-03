import { Request, Response } from 'express';
import LoginAdapter from '../../Adapter/Auth/LoginAdapter';
import LoginHandler from '../../../../Application/Handlers/Auth/LoginHandler';
import { inject } from 'inversify';
import LoginPresenter from '../../Presenters/Auth/LoginPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

class LoginAction {
  private handler: LoginHandler;
  private adapter: LoginAdapter;
  constructor(@inject(LoginAdapter) adapter: LoginAdapter, @inject(LoginHandler) handler: LoginHandler) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command = this.adapter.from(req);

    const { user, token } = await this.handler.execute(command);

    const presenter = new LoginPresenter(user, token);

    res.status(HTTP_CODES.ASYNC).json(success(presenter.getData(), 'Login action: user is satisfully logged'));
  }
}

export default LoginAction;
