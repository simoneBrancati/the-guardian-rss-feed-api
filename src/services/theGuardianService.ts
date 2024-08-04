// import { getDataFromTheGuardian as port_getDataFromTheGuardian } from "../ports/httpOut";
import {
  // TheGuardianResponse,
  TheGuardianSection,
  TheGuardianSectionResult,
} from "../models/theGuardianResponse";
import { CustomRssJson, CustomRssJsonItem } from "../models/customRssJson";
import { createWordleScore } from "../utils/wordleScore";
import { convertDateFromIsoToRFC } from "../utils/dates";

// export const getDataFromTheGuardian = async (
//   section: string,
// ): Promise<TheGuardianResponse> => {
//   return port_getDataFromTheGuardian(section);
// };

export const createRssJson = (
  section: TheGuardianSection,
  sectionResults: TheGuardianSectionResult[],
): CustomRssJson => {
  return {
    rss: {
      "@_xmlns:kotuko": "https://kotuko.it/",
      "@_version": "2.0",
      channel: {
        title: section.webTitle,
        link: section.webUrl,
        description: "The Guardian UK RSS Feed",
        language: "en-gb",
        item: sectionResults.map((result) => createRssJsonItem(result)),
      },
    },
  };
};

export const createRssJsonItem = (
  sectionResult: TheGuardianSectionResult,
): CustomRssJsonItem => {
  return {
    title: sectionResult.webTitle,
    link: sectionResult.webUrl,
    pubDate: convertDateFromIsoToRFC(sectionResult.webPublicationDate),
    guid: sectionResult.apiUrl,
    "kotuko:wordleScore": createWordleScore(sectionResult.webTitle),
  };
};
