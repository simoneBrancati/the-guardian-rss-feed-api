import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api";
import { AxiosError } from "axios";
import logger from "../utils/logger";

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
      logger.error(`${err.message}, Stack: ${err.stack}`);
      return {
        status: err.response?.status || 500,
        error: {
          message: err.message,
          stack: err.stack,
        },
      };
    }

    if (err instanceof Error) {
      logger.error(`${err.message}, Stack: ${err.stack}`);
      return {
        status: 500,
        error: {
          message: err.message,
          stack: err.stack,
        },
      };
    }

    logger.error("HTTP PORT - GET REQUEST: Unknown Error");

    return {
      status: 500,
      error: {
        message: "Internal Server Error",
        stack: "HTTP PORT - GET REQUEST: Unknown Error",
      },
    };
  }
};
