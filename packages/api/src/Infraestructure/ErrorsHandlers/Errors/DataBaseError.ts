import { InfraestructureError } from './InfraestructureError';

export class DataBaseError extends InfraestructureError {
  public constructor(message: string) {
    super(message, 500);
  }
}
