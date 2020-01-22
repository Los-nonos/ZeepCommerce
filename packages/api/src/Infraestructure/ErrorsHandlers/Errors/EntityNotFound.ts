import { InfraestructureError } from './InfraestructureError';

export class EntityNotFound extends InfraestructureError {
  public constructor(message: string) {
    super(message, 404);
  }
}
