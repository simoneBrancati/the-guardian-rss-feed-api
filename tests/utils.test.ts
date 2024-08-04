import { convertDateFromIsoToRFC } from "../src/utils/dates";
import { createWordleScore } from "../src/utils/wordleScore";

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
