export const createWordleScore = (str: string, desiredLength = 5): number => {
  const wordRegex = /\w+/g;
  const wordsArray = str.match(wordRegex) || [];

  return wordsArray.reduce((count: number, word: string) => {
    if (word.length === desiredLength) {
      count += 1;
    }

    return count;
  }, 0);
};
