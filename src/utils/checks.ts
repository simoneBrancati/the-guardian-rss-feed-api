export const isString = (str: unknown): str is string => {
  return typeof str === "string";
};

export const isNonEmptyString = (str: unknown): str is string => {
  return isString(str) && !!str;
};

export const isKebabCase = (str: string) => {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
};
