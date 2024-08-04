import { XMLBuilder } from "fast-xml-parser";

export const convertJsToXml = <ObjectType>(
  jObj: ObjectType,
  options?: {
    ignoreAttributes?: boolean;
    attributeNamePrefix?: string;
    format?: boolean;
  },
): string => {
  const defaultOptions = {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    format: false,
  };

  const builderOptions = {
    ignoreAttributes:
      options?.ignoreAttributes || defaultOptions.ignoreAttributes,
    attributeNamePrefix:
      options?.attributeNamePrefix || defaultOptions.attributeNamePrefix,
    format: options?.format || defaultOptions.format,
  };

  const builder = new XMLBuilder(builderOptions);

  return builder.build(jObj);
};
