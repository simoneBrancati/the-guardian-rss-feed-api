import {
  TheGuardianSection,
  TheGuardianSectionResult,
} from "../models/theGuardianResponse";
import { CustomRssJson, CustomRssJsonItem } from "../models/customRssJson";
import { createWordleScore } from "../utils/wordleScore";
import { convertDateFromIsoToRFC } from "../utils/dates";
import { convertJsToXml } from "../utils/xml";

export const generateRss = (
  section: TheGuardianSection,
  sectionResults: TheGuardianSectionResult[],
): string => {
  const rssJson = generateRssJson(section, sectionResults);
  return convertJsToXml<CustomRssJson>(rssJson);
};

export const generateRssJson = (
  section: TheGuardianSection,
  sectionResults: TheGuardianSectionResult[],
): CustomRssJson => {
  return {
    rss: {
      "@_version": "2.0",
      "@_xmlns:kotuko": "https://kotuko.it/",
      channel: {
        title: section.webTitle,
        link: section.webUrl,
        description: "The Guardian UK RSS Feed",
        language: "en-gb",
        item: sectionResults.map((result) => generateRssJsonItem(result)),
      },
    },
  };
};

export const generateRssJsonItem = (
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
