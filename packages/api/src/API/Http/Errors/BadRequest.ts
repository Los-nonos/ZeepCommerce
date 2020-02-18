import { InfraestructureError } from '../../../Infraestructure/Errors/InfraestructureError';

export class BadRequest extends InfraestructureError {
  constructor(message: string) {
    super(message, 400);
  }
}
