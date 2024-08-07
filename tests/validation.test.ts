import { validateSectionKey } from "../src/validation/rssService.validation";

describe("validateSectionKey", () => {
  it("should return false on empty key", () => {
    const sectionKey = "";
    const result = validateSectionKey(sectionKey);
    expect(result).toBe(false);
  });

  it("should return false on undefined key", () => {
    const sectionKey = undefined;
    const result = validateSectionKey(sectionKey);
    expect(result).toBe(false);
  });

  it("should return false on key starting with -", () => {
    const sectionKey = "-section";
    const result = validateSectionKey(sectionKey);
    expect(result).toBe(false);
  });

  it("should return false on key ending with -", () => {
    const sectionKey = "another-section-";
    const result = validateSectionKey(sectionKey);
    expect(result).toBe(false);
  });

  it("should return false on key starting and ending with -", () => {
    const sectionKey = "-bad-section-";
    const result = validateSectionKey(sectionKey);
    expect(result).toBe(false);
  });

  it("should return true", () => {
    const sectionKey = "good-section";
    const result = validateSectionKey(sectionKey);
    expect(result).toBe(true);
  });
});
