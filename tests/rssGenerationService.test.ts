import { TheGuardianHttpResponse } from "../src/models/theGuardianResponse";
import {
  generateRssJsonItem,
  generateRssJson,
  generateRss,
} from "../src/services/rssGeneration.service";
import { readFileSync } from "fs";
import { join } from "path";

describe("generateRssJsonItem", () => {
  it("should create an RSS Json Item from a section result", () => {
    const mockDataPath = join(
      __dirname,
      "mocks",
      "theGuardianResponse.mock.json",
    );
    const mockData = readFileSync(mockDataPath, "utf8");
    const mockResponse: TheGuardianHttpResponse = JSON.parse(mockData);

    const result = generateRssJsonItem(mockResponse.response.results[1]);

    const expected = {
      title:
        "The dead hang delight: how this quick, surprisingly simple exercise can change your life",
      link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
      pubDate: "Sun, 04 Aug 2024 13:00:32 GMT",
      guid: "https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
      "kotuko:wordleScore": 1,
    };
    expect(result).toStrictEqual(expected);
  });
});

describe("generateRssJson", () => {
  it("should create an RSS Json Item from a section result", () => {
    const mockDataPath = join(
      __dirname,
      "mocks",
      "theGuardianResponse.mock.json",
    );
    const mockData = readFileSync(mockDataPath, "utf8");
    const mockResponse: TheGuardianHttpResponse = JSON.parse(mockData);

    const result = generateRssJson(
      mockResponse.response.section,
      mockResponse.response.results,
    );

    const expected = {
      rss: {
        "@_version": "2.0",
        "@_xmlns:kotuko": "https://kotuko.it/",
        channel: {
          title: "Life and style",
          link: "https://www.theguardian.com/lifeandstyle",
          description: "The Guardian UK RSS Feed",
          language: "en-gb",
          item: [
            {
              title: "Who invented mathematics?",
              link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics",
              pubDate: "Sun, 04 Aug 2024 13:01:31 GMT",
              guid: "https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics",
              "kotuko:wordleScore": 0,
            },
            {
              title:
                "The dead hang delight: how this quick, surprisingly simple exercise can change your life",
              link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
              pubDate: "Sun, 04 Aug 2024 13:00:32 GMT",
              guid: "https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life",
              "kotuko:wordleScore": 1,
            },
            {
              title:
                "Almost all nursery rhymes are utter doggerel and I loathe them, sadly my daughter doesn’t | Seamas O'Reilly",
              link: "https://www.theguardian.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt",
              pubDate: "Sun, 04 Aug 2024 08:30:25 GMT",
              guid: "https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt",
              "kotuko:wordleScore": 3,
            },
          ],
        },
      },
    };
    expect(result).toStrictEqual(expected);
  });
});

describe("generateRss", () => {
  it("should create a valid RSS Xml string", () => {
    const mockDataPath = join(
      __dirname,
      "mocks",
      "theGuardianResponse.mock.json",
    );
    const mockData = readFileSync(mockDataPath, "utf8");
    const mockResponse: TheGuardianHttpResponse = JSON.parse(mockData);

    const result = generateRss(
      mockResponse.response.section,
      mockResponse.response.results,
    );

    expect(result).toBe(
      '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:kotuko="https://kotuko.it/"><channel><title>Life and style</title><link>https://www.theguardian.com/lifeandstyle</link><description>The Guardian UK RSS Feed</description><language>en-gb</language><item><title>Who invented mathematics?</title><link>https://www.theguardian.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics</link><pubDate>Sun, 04 Aug 2024 13:01:31 GMT</pubDate><guid>https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics</guid><kotuko:wordleScore>0</kotuko:wordleScore></item><item><title>The dead hang delight: how this quick, surprisingly simple exercise can change your life</title><link>https://www.theguardian.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life</link><pubDate>Sun, 04 Aug 2024 13:00:32 GMT</pubDate><guid>https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life</guid><kotuko:wordleScore>1</kotuko:wordleScore></item><item><title>Almost all nursery rhymes are utter doggerel and I loathe them, sadly my daughter doesn’t | Seamas O&apos;Reilly</title><link>https://www.theguardian.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt</link><pubDate>Sun, 04 Aug 2024 08:30:25 GMT</pubDate><guid>https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt</guid><kotuko:wordleScore>3</kotuko:wordleScore></item></channel></rss>',
    );
  });
});
