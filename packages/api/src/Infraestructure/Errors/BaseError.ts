export class BaseError extends Error {
  constructor(message: string | object) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
    } else {
      super(message);
    }

    Error.captureStackTrace(this, this.constructor);
  }
}
