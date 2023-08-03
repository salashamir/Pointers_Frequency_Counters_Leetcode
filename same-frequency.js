// add whatever parameters you deem necessary
function freqCounter(str) {
  const freqObj = {};
  for (const letter of str) {
    freqObj[letter] = freqObj[letter] + 1 || 1;
  }
  return freqObj;
}

function sameFrequency(num1, num2) {
  const num1Freq = freqCounter(num1.toString());
  const num2Freq = freqCounter(num2.toString());
  for (const key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }

  return true;
}

sameFrequency(1881, 1188);

module.exports = sameFrequency;
