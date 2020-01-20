import { InfraestructureError } from "./InfraestructureError";

export class NotFoundData extends InfraestructureError {
  constructor(message: string) {
    super(message, 404);
  }
}
