import {
  TheGuardianHttpResponse,
  TheGuardianApiResponse,
} from "../models/theGuardianResponse";
import { makeHttpGetRequest } from "../ports/http";

export const getSectionFromTheGuardian = async (
  sectionKey: string,
): Promise<TheGuardianApiResponse> => {
  const response =
    await makeHttpGetRequest<TheGuardianHttpResponse>(sectionKey);
  return {
    status: response.status,
    data: response.data.response,
  };
};
