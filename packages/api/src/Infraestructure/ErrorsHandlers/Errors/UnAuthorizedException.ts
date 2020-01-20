import { InfraestructureError } from "./InfraestructureError";

class UnAuthorizedException extends InfraestructureError {
  constructor(message: string) {
    super(message, 401);
  }
}

export default UnAuthorizedException;
