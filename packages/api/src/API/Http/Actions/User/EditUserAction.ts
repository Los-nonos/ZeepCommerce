import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import EditUserAdapter from '../../Adapter/User/EditUserAdapter';
import EditUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/EditUserHandlerInterface';
import EditUserCommand from '../../../../Application/Commands/User/EditUserCommand';
import TYPES from '../../../../Infraestructure/DI/types';
import EditUserPresenter from '../../Presenters/User/EditUserPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

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
    const command: EditUserCommand = await this.adapter.from(req.body, req.params);
    const result = await this.handler.Edit(command);

    const presenter = new EditUserPresenter(result);

    res.status(HTTP_CODES.OK).json(success(presenter.getData(), 'EditUserAction: User updated successfully'));
  }
}

export default EditUserAction;
