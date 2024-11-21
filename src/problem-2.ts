function removeDuplicates(arr: number[]): number[] {
  const uniqueArr: number[] = [];

  arr.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });

  return uniqueArr;
}

const newArray: number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(newArray);
