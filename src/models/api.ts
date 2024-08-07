export interface ApiResponse<DataType> {
  status: number;
  data?: DataType;
  error?: {
    message: string;
    stack?: string;
  };
}
