'use strict';

module.exports = function (word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "we already have your awesome word: ";
  } else {
    wordObject[word] = true;
    msg = "we saved the cool world: ";
  }
  console.log(wordObject);
  return {message: msg, confirm: word};
}
