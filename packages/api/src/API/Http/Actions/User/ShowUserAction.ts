import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import ShowUserAdapter from '../../Adapter/User/ShowUserAdapter';
import UserFindCommand from '../../../../Domain/Commands/User/UserFindCommand';
import FindUserHandlerInterface from '../../../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface';
import User from '../../../../Domain/Entities/User';
import TYPES from '../../../../Infraestructure/types';

@injectable()
class ShowUserAction {
  private adapter: ShowUserAdapter;
  private handler: FindUserHandlerInterface;

  constructor(
    @inject(ShowUserAdapter) adapter: ShowUserAdapter,
    @inject(TYPES.IFindUserHandler) findUserHandler: FindUserHandlerInterface,
  ) {
    this.adapter = adapter;
    this.handler = findUserHandler;
  }

  public async execute(req: Request, res: Response) {
    const command: UserFindCommand = await this.adapter.from(req);
    const response: User = await this.handler.FindUser(command);
    
    res.status(200).json({ message: 'User found', user: response });
  }
}

export default ShowUserAction;
