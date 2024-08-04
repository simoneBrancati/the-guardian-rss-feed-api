// import { getDataFromTheGuardian as port_getDataFromTheGuardian } from "../ports/httpOut";
import {
  // TheGuardianResponse,
  TheGuardianSection,
  TheGuardianSectionResult,
} from "../models/theGuardianResponse";
import { RssJson, RssJsonItem } from "../models/rssJson";
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
): RssJson => {
  return {
    rss: {
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
): RssJsonItem => {
  return {
    title: sectionResult.webTitle,
    link: sectionResult.webUrl,
    language: "en-gb",
    pubDate: convertDateFromIsoToRFC(sectionResult.webPublicationDate),
    guid: sectionResult.id,
    "kotuko:wordleScore": createWordleScore(sectionResult.webTitle),
  };
};
