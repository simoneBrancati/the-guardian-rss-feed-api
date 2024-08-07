import { IError } from "./ErrorInterface";

abstract class CustomError extends Error {
  abstract errorCode: number;
  abstract erroType: string;
  error?: IError;

  constructor(message: string, error?: IError) {
    super(message);

    this.error = error;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): {
    message: string;
    metadata?: Record<string, unknown>;
  };
}

export default CustomError;
