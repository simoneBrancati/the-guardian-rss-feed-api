import { convertDateFromIsoToRFC } from "../src/utils/dates";
import { createWordleScore } from "../src/utils/wordleScore";
import { convertJsToXml } from "../src/utils/xml";

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

describe("convertJsToXml", () => {
  it("should convert an object to a valid rss xml", () => {
    const JObj = {
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
    const result = convertJsToXml(JObj);

    expect(result).toBe(
      '<rss version="2.0" xmlns:kotuko="https://kotuko.it/"><channel><title>Life and style</title><link>https://www.theguardian.com/lifeandstyle</link><description>The Guardian UK RSS Feed</description><language>en-gb</language><item><title>Who invented mathematics?</title><link>https://www.theguardian.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics</link><pubDate>Sun, 04 Aug 2024 13:01:31 GMT</pubDate><guid>https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/who-invented-mathematics</guid><kotuko:wordleScore>0</kotuko:wordleScore></item><item><title>The dead hang delight: how this quick, surprisingly simple exercise can change your life</title><link>https://www.theguardian.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life</link><pubDate>Sun, 04 Aug 2024 13:00:32 GMT</pubDate><guid>https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/the-dead-hang-delight-how-this-quick-surprisingly-simple-exercise-can-change-your-life</guid><kotuko:wordleScore>1</kotuko:wordleScore></item><item><title>Almost all nursery rhymes are utter doggerel and I loathe them, sadly my daughter doesn’t | Seamas O&apos;Reilly</title><link>https://www.theguardian.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt</link><pubDate>Sun, 04 Aug 2024 08:30:25 GMT</pubDate><guid>https://content.guardianapis.com/lifeandstyle/article/2024/aug/04/almost-all-nursery-rhymes-are-utter-doggerel-and-i-loathe-them-sadly-my-daughter-doesnt</guid><kotuko:wordleScore>3</kotuko:wordleScore></item></channel></rss>',
    );
  });
});
