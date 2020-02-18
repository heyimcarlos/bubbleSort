const split = array => {
  const mid = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  return [firstHalf, secondHalf];
};

const merge = (arrOne, arrTwo) => {
  debugger;
  const array = [];

  while (arrOne.length && arrTwo.length) {
    const first = arrOne[0];
    const second = arrTwo[0];

    if (first < second) {
      const spliced = arrOne.splice(0, 1)[0];
      array.push(spliced);
    } else {
      const splicedTwo = arrTwo.splice(0, 1)[0];
      array.push(splicedTwo);
    }
  }
  if (!arrOne.length) return [...array, ...arrTwo];
  else return [...array, ...arrOne];
};

const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const [firstHalf, secondHalf] = split(arr);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

mergeSort([27, 3, 38, 43, 9, 10, 82]);
