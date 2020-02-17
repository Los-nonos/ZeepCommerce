import { InfraestructureError } from '../../../Infraestructure/Errors/InfraestructureError';

export class InvalidData extends InfraestructureError {
  constructor(message: string) {
    super(message, 400);
  }
}
