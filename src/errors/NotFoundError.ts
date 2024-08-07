import CustomError from "./CustomError";
import { IError } from "./ErrorInterface";

export default class NotFoundError extends CustomError {
  errorCode = 404;
  erroType = "NOT_FOUND_ERROR";

  constructor(message: string, error?: IError) {
    super(message, error);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeError() {
    return {
      message: this.message,
    };
  }
}
