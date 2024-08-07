import NotFoundError from "../errors/NotFoundError";
import ServerError from "../errors/ServerError";
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

  if (response.status > 399) {
    if (response.status === 404) {
      throw new NotFoundError("Section not found");
    }

    throw new ServerError("Internal Server Error");
  }

  if (!response.data) {
    throw new ServerError("Internal Server Error");
  }

  return response.data.response;
};
