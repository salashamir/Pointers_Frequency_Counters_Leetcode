// add whatever parameters you deem necessary
function twoArrayObject(keysArr, valsArr) {
  if (keysArr.length === 0) return {};
  const keysValsObj = {};

  let keysPointer = 0;

  while (keysPointer < keysArr.length) {
    keysValsObj[keysArr[keysPointer]] =
      valsArr[keysPointer] !== null && valsArr[keysPointer] !== undefined
        ? valsArr[keysPointer]
        : null;
    keysPointer++;
  }

  return keysValsObj;
}

// console.log(twoArrayObject(["a", "b", "c", "d", "e", "f"], [1, 2]));

module.exports = twoArrayObject;
