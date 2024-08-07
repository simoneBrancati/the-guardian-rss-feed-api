export interface ApiResponse<DataType> {
  status: number;
  data?: DataType;
  error?: string;
}
