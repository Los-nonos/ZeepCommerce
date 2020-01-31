import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../../../../Infraestructure/types';
import CreateUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/CreateUserHandlerInterface';
import StoreUserAdapter from '../../Adapter/User/StoreUserAdapter';
import UserCreateCommand from '../../../../Domain/Commands/User/UserCreateCommand';

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
    const command: UserCreateCommand = await this.adapter.from(req);
    const response: string = await this.handler.Create(command);

    res.status(201).json({ message: response });
  }
}

export default StoreUserAction;
