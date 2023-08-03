// add whatever parameters you deem necessary
function countPairs(arr, targetNum) {
  const diffs = [];
  let pairs = 0;
  for (const num of arr) {
    if (diffs.includes(num)) {
      pairs++;
    } else {
      diffs.push(targetNum - num);
    }
  }

  return pairs;
}

console.log(countPairs([3, 1, 5, 4, 2], 6));

module.exports = countPairs;
