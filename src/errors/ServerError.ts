import CustomError from "./CustomError";

export default class ServerError extends CustomError {
  errorCode = 500;
  erroType = "INTERNAL_SERVER_ERROR";
  metadata;

  constructor(message: string, metadata?: Record<string, unknown>) {
    super(message);
    this.metadata = metadata;

    Object.setPrototypeOf(this, ServerError.prototype);
  }

  public serializeError() {
    return {
      message: this.message,
      metadata: this.metadata,
    };
  }
}
