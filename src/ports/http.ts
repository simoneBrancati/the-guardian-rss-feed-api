import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api";
import { AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.THE_GUARDIAN_SECTION_ENDPOINT,
  timeout: 10000,
  params: {
    "api-key": process.env.THE_GUARDIAN_API_KEY,
  },
});

export const makeHttpGetRequest = async <DataType>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<DataType>> => {
  try {
    const axiosResponse = await instance.get(url, config);
    return {
      status: axiosResponse.status,
      data: axiosResponse.data,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        status: err.response?.status || 500,
        error: err.message,
      };
    }

    return {
      status: 500,
      error: "Internal Server Error",
    };
  }
};
