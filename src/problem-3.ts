function countWordOccurrences(sentence: string, word: string): number {
  const textToArr: string[] = sentence.split(" ");
  let countWord = 0;
  textToArr.forEach((text) => {
    if (text.toLowerCase() === word.toLowerCase()) {
      countWord++;
    }
  });
  return countWord;
}

const totalCount: number = countWordOccurrences(
  "I lovej typescript",
  "typescript"
);

console.log(totalCount);
