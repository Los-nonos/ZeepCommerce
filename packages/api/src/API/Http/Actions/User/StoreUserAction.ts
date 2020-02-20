import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../../../../Infraestructure/DI/types';
import CreateUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/CreateUserHandlerInterface';
import StoreUserAdapter from '../../Adapter/User/StoreUserAdapter';
import UserCreateCommand from '../../../../Application/Commands/User/UserCreateCommand';
import User from '../../../../Domain/Entities/User';
import CreateUserPresenter from '../../Presenters/User/CreateUserPresenter';
import { success } from '../../Presenters/Base/success';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class StoreUserAction {
  private handler: CreateUserHandlerInterface;
  private adapter: StoreUserAdapter;

  constructor(
    @inject(TYPES.ICreateUserHandler) createUserHandler: CreateUserHandlerInterface,
    @inject(StoreUserAdapter) adapter: StoreUserAdapter,
  ) {
    this.handler = createUserHandler;
    this.adapter = adapter;
  }

  public async execute(req: Request, res: Response) {
    const command: UserCreateCommand = await this.adapter.from(req.params);
    const response: User = await this.handler.Create(command);

    const presenter = new CreateUserPresenter(response);

    res.status(HTTP_CODES.CREATED).json(success(presenter.getData(), 'CreateUserAction: User Created successfully'));
  }
}

export default StoreUserAction;
