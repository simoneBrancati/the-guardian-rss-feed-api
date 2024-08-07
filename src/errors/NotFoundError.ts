import CustomError from "./CustomError";

export default class NotFoundError extends CustomError {
  errorCode = 404;
  erroType = "NOT_FOUND_ERROR";
  metadata;

  constructor(message: string, metadata?: Record<string, unknown>) {
    super(message);
    this.metadata = metadata;

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeError() {
    return {
      message: this.message,
      metadata: this.metadata,
    };
  }
}
