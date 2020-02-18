import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../../../../Infraestructure/DI/types';
import DeleteUserAdapter from '../../Adapter/User/DeleteUserAdapter';
import DeleteUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/DeleteUserHandlerInterface';
import DeleteUserCommand from '../../../../Application/Commands/User/DeleteUserCommand';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class DeleteUserAction {
  private adapter: DeleteUserAdapter;
  private handler: DeleteUserHandlerInterface;

  constructor(
    @inject(DeleteUserAdapter) adapter: DeleteUserAdapter,
    @inject(TYPES.IDeleteUserHandler) deleteUserHandler: DeleteUserHandlerInterface,
  ) {
    this.adapter = adapter;
    this.handler = deleteUserHandler;
  }

  public async execute(req: Request, res: Response) {
    const command: DeleteUserCommand = await this.adapter.from(req);
    const response = await this.handler.Delete(command);

    res.status(HTTP_CODES.NO_CONTENT).end();
  }
}

export default DeleteUserAction;
