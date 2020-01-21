import { InfraestructureError } from './InfraestructureError';

export class InvalidData extends InfraestructureError {
  constructor(message: string) {
    super(message, 400);
  }
}
