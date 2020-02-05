import { InfraestructureError } from '../../../Infraestructure/Errors/InfraestructureError';

export class SessionInvalid extends InfraestructureError {
  public constructor(message: string) {
    super(message, 403);
  }
}
