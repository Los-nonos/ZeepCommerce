import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import RenewTokenAdapter from '../../Adapter/Auth/RenewTokenAdapter';
import RenewTokenHandler from '../../../../Application/Handlers/Auth/RenewTokenHandler';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class RenewTokenAction {
  private adapter: RenewTokenAdapter;
  private handler: RenewTokenHandler;

  constructor(
    @inject(RenewTokenAdapter) adapter: RenewTokenAdapter,
    @inject(RenewTokenHandler) handler: RenewTokenHandler,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command = this.adapter.from(req);
    const response = this.handler.execute(command);

    res.status(HTTP_CODES.OK).json({ response });
  }
}

export default RenewTokenAction;
