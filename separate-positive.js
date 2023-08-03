// add whatever parameters you deem necessary
function separatePositive(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] < 0 && arr[end] > 0) {
      // perform swap
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      // advacne pointer
      start++;
      end--;
    } else if (arr[start] < 0 && arr[end] < 0) {
      end--;
    } else {
      start++;
    }
  }

  return arr;
}

// console.log(separatePositive([2, -1, -3, 6, -8, 10]));

module.exports = separatePositive;
