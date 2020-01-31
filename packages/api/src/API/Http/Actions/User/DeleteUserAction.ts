import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../../../../Infraestructure/types';
import DeleteUserAdapter from '../../Adapter/User/DeleteUserAdapter';
import DeleteUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/DeleteUserHandlerInterface';
import DeleteUserCommand from '../../../../Domain/Commands/User/DeleteUserCommand';

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

    res.status(202).json({message: response});
  }
}

export default DeleteUserAction;
