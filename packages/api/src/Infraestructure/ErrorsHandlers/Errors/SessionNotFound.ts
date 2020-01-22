import { InfraestructureError } from './InfraestructureError';

export class SessionNotFound extends InfraestructureError {
  public constructor(message: string) {
    super(message, 401);
  }
}
