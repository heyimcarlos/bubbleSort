function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, idOne, idTwo) {
  const itemToSwap = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = itemToSwap;
}
