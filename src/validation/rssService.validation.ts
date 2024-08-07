import { isKebabCase, isNonEmptyString } from "../utils/checks";

export const validateSectionKey = (key: unknown): boolean => {
  if (!isNonEmptyString(key)) {
    return false;
  }

  return isKebabCase(key);
};
