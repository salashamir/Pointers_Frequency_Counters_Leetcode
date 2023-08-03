// add whatever parameters you deem necessary
function freqCounter(str) {
  const freqObj = {};
  for (const letter of str) {
    freqObj[letter] = freqObj[letter] + 1 || 1;
  }
  return freqObj;
}

function constructNote(message, letters) {
  const messageFreq = freqCounter(message);
  const lettersFreq = freqCounter(letters);

  for (const key in messageFreq) {
    if (!(messageFreq[key] <= lettersFreq[key])) {
      return false;
    }
  }

  return true;
}

module.exports = constructNote;
