import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import EditUserAdapter from '../../Adapter/User/EditUserAdapter';
import EditUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/EditUserHandlerInterface';
import EditUserCommand from '../../../../Application/Commands/User/EditUserCommand';
import TYPES from '../../../../Infraestructure/types';

@injectable()
class EditUserAction {
  private adapter: EditUserAdapter;
  private handler: EditUserHandlerInterface;
  constructor(
    @inject(EditUserAdapter) adapter: EditUserAdapter,
    @inject(TYPES.IEditUserHandler) editUserHandler: EditUserHandlerInterface,
  ) {
    this.adapter = adapter;
    this.handler = editUserHandler;
  }

  public async execute(req: Request, res: Response) {
    const command: EditUserCommand = await this.adapter.from(req);
    await this.handler.Edit(command);
    res.status(200).json({ message: 'User updated correctly' });
  }
}

export default EditUserAction;
