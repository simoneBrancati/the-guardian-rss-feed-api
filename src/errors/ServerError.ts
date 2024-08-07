import CustomError from "./CustomError";
import { IError } from "./ErrorInterface";

export default class ServerError extends CustomError {
  errorCode = 500;
  erroType = "INTERNAL_SERVER_ERROR";

  constructor(message: string, error?: IError) {
    super(message, error);

    Object.setPrototypeOf(this, ServerError.prototype);
  }

  public serializeError() {
    return {
      message: this.message,
    };
  }
}
