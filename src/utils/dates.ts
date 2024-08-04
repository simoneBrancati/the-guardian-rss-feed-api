export const convertDateFromIsoToRFC = (isoDate: string): string => {
  return new Date(isoDate).toUTCString();
};
