import { InfraestructureError } from '../../../Infraestructure/Errors/InfraestructureError';
import { HTTP_CODES } from '../Enums/HttpCodes';

export class BadRequest extends InfraestructureError {
  constructor(message: string) {
    super(message, HTTP_CODES.BAD_REQUEST);
  }
}
