import { InfraestructureError } from '../../../Infraestructure/Errors/InfraestructureError';

export class UnAuthorizedError extends InfraestructureError {
  constructor(message: string) {
    super(message, 401);
  }
}
