// add whatever parameters you deem necessary
function averagePair(sorArr, targetAvg) {
  if (!sorArr.length) return false;

  let start = 0;
  let end = sorArr.length - 1;

  while (start < end) {
    const avg = (sorArr[start] + sorArr[end]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));

module.exports = averagePair;
