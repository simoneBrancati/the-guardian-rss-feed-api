import { TheGuardianHttpResponse } from "../src/models/theGuardianResponse";
import {
  convertDateFromIsoToRFC,
  createWordleScore,
  createRssJsonItem,
  createRssJson,
} from "../src/services/theGuardianService";
import { readFileSync } from "fs";
import { join } from "path";

describe("createWordleScore", () => {
  it("should count the number of 5-letter words", () => {
    const webTitle = "hello world, this is a test";
    const result = createWordleScore(webTitle);
    expect(result).toBe(2);
  });

  it("should handle empty strings", () => {
    const webTitle = "";
    const result = createWordleScore(webTitle);
    expect(result).toBe(0);
  });

  it("should handle different desired lengths", () => {
    const webTitle = "one two three four five six";
    const result = createWordleScore(webTitle, 3);
    expect(result).toBe(3);
  });

  it("should count the number of 5-letter words taking punctuation into account", () => {
    const webTitle = "hello world! this , is a test";
    const result = createWordleScore(webTitle);
    expect(result).toBe(2);
  });
});

describe("convertDateFromIsoToRFC", () => {
  it("should convert the date from ISO to RFC format", () => {
    const isoDate = "2024-08-04T13:01:31Z";
    const result = convertDateFromIsoToRFC(isoDate);

    const rfcDate = "Sun, 04 Aug 2024 13:01:31 GMT";
    expect(result).toBe(rfcDate);
  });

  it("should handle invalid ISO dates", () => {
    const isoDate = "202A-8-04T13:01:31Z";
    const result = convertDateFromIsoToRFC(isoDate);
    expect(result).toBe("Invalid Date");
  });
});

describe("createRssJsonItem", () => {
  it("should create an RSS Json Item from a section result", () => {
    const mockDataPath = join(
      __dirname,
      "mocks",
      "theGuardianResponse.mock.json",
    );
    const mockData = readFileSync(mockDataPath, "utf8");
    const mockResponse: TheGuardianHttpResponse = JSON.parse(mockData);

    const result = createRssJsonItem(mockResponse.response.results[1]);

    const expected = {
      title:
        "The dead hang delight: how this quick, surprisingly simple exercise can change your life",
      link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
      language: "en-gb",
      pubDate: "Sun, 04 Aug 2024 13:00:32 GMT",
      guid: "lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
      "kotuko:wordleScore": 1,
    };
    expect(result).toStrictEqual(expected);
  });
});

describe("createRssJson", () => {
  it("should create an RSS Json Item from a section result", () => {
    const mockDataPath = join(
      __dirname,
      "mocks",
      "theGuardianResponse.mock.json",
    );
    const mockData = readFileSync(mockDataPath, "utf8");
    const mockResponse: TheGuardianHttpResponse = JSON.parse(mockData);

    const result = createRssJson(
      mockResponse.response.section,
      mockResponse.response.results,
    );

    const expected = {
      rss: {
        channel: {
          title: "Life and style",
          link: "https://www.theguardian.com/lifeandstyle",
          description: "The Guardian UK RSS Feed",
          language: "en-gb",
          item: [
            {
              title: "Who invented mathematics?",
              link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics",
              language: "en-gb",
              pubDate: "Sun, 04 Aug 2024 13:01:31 GMT",
              guid: "lifeandstyle/article/2024/aug/04/who-invented-mathematics",
              "kotuko:wordleScore": 0,
            },
            {
              title:
                "The dead hang delight: how this quick, surprisingly simple exercise can change your life",
              link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
              language: "en-gb",
              pubDate: "Sun, 04 Aug 2024 13:00:32 GMT",
              guid: "lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
              "kotuko:wordleScore": 1,
            },
            {
              title:
                "Almost all nursery rhymes are utter doggerel and I loathe them, sadly my daughter doesn’t | Seamas O'Reilly",
              link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt",
              language: "en-gb",
              pubDate: "Sun, 04 Aug 2024 08:30:25 GMT",
              guid: "lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt",
              "kotuko:wordleScore": 3,
            },
          ],
        },
      },
    };
    expect(result).toStrictEqual(expected);
  });
});
