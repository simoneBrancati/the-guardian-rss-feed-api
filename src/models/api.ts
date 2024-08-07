import { IError } from "../errors/ErrorInterface";

export interface ApiResponse<DataType> {
  status: number;
  data?: DataType;
  error?: IError;
}
