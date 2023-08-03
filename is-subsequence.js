// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str1Pointer = 0;
  let str2Pointer = 0;

  while (str2Pointer < str2.length) {
    if (str2[str2Pointer] === str1[str1Pointer]) {
      str1Pointer++;
    }
    str2Pointer++;
  }

  if (str1Pointer === str1.length) {
    return true;
  }

  return false;
}

console.log(isSubsequence("abc", "acb"));

module.exports = isSubsequence;
