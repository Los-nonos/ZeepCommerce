import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ShowAllUserAdapter from '../../Adapter/User/ShowAllUserAdapter';
import UserFindAllCommand from '../../../../Application/Commands/User/FindAllUsersCommand';
import FindAllUserHandlerInterface from '../../../../Infraestructure/Interfaces/User/FindAllUsersHandlerInterface';
import User from '../../../../Domain/Entities/User';
import TYPES from '../../../../Infraestructure/DI/types';

@injectable()
class ShowAllUserAction {
  private adapter: ShowAllUserAdapter;
  private handler: FindAllUserHandlerInterface;

  constructor(
    @inject(ShowAllUserAdapter) adapter: ShowAllUserAdapter,
    @inject(TYPES.IFindAllUsersHandler) findUserHandler: FindAllUserHandlerInterface,
  ) {
    this.adapter = adapter;
    this.handler = findUserHandler;
  }

  public async execute(req: Request, res: Response) {
    const command: UserFindAllCommand = await this.adapter.from(req);
    const response: User[] = await this.handler.FindAllUsers(command);

    res.status(200).json({ message: 'User found', user: response });
  }
}

export default ShowAllUserAction;
