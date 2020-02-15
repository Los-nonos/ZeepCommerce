import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { HTTP_CODES } from '../../Enums/HttpCodes';
import DeleteUserRoleAdapter from '../../Adapters/UserRole/DeleteUserRoleAdapter';
import DeleteUserRoleHandler from '../../../../Application/Handlers/UserRole/DeleteUserRoleHandler';

@injectable()
class DeleteUserRoleAction {
  private adapter: DeleteUserRoleAdapter;
  private handler: DeleteUserRoleHandler;
  constructor(
    @inject(DeleteUserRoleAdapter) adapter: DeleteUserRoleAdapter,
    @inject(DeleteUserRoleHandler) handler: DeleteUserRoleHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }
  public async execute(req: Request, res: Response) {
    const command: any = this.adapter.from(req);
    await this.handler.execute(command);

    res.status(HTTP_CODES.NO_CONTENT).end();
  }
}

export default DeleteUserRoleAction;
