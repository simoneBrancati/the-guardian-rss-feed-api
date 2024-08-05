import {
  TheGuardianHttpResponse,
  TheGuardianResponse,
} from "../models/theGuardianResponse";
import { makeHttpGetRequest } from "../ports/http";

export const getSectionFromTheGuardian = async (
  sectionKey: string,
): Promise<TheGuardianResponse> => {
  const response =
    await makeHttpGetRequest<TheGuardianHttpResponse>(sectionKey);

  return response.data.response;
};
