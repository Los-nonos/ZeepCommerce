import { InfraestructureError } from './InfraestructureError';

class DomainException extends InfraestructureError {
  constructor(message: string) {
    super(message, 500);
  }
}

export default DomainException;
