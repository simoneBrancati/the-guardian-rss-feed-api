abstract class CustomError extends Error {
  abstract errorCode: number;
  abstract erroType: string;
  abstract metadata?: Record<string, unknown>;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): {
    message: string;
    metadata?: Record<string, unknown>;
  };
}

export default CustomError;
