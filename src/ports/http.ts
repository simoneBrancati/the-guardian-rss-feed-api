import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.THE_GUARDIAN_SECTION_ENDPOINT,
  timeout: 10000,
  params: {
    "api-key": process.env.THE_GUARDIAN_API_KEY,
  },
});

export const makeHttpGetRequest = <DataType>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<DataType>> => {
  return instance.get(url, config);
};
