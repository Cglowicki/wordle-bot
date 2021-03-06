// const util = require('util');
// console.log(util.inspect(Array, { maxArrayLength: null }));

const { createWordList } = require('./createWordArray');
let wordList = createWordList();

//// yellow condition ////
// removes possibilities where a letter exists
// at specific index, also requires
// that a letter be in a word...
function letterIncluded(yellow, letter, pos) {
  let afterYellow = [];
  for (let word of yellow) {
    if (word.includes(letter) && (word[pos] !== letter)) {
      // console.log(`words with ${letter} NOT @ ${pos}`, word);
      afterYellow.push(word);
    }
  }
  return afterYellow;
}
// let newList = letterIncluded(wordList, 'l', 0);

//// grey condition ////
// removes possibilities which include the letter
function letterNotIncluded(grey, letter) {
  let afterGrey = [];
  for (let word of grey) {
    if (!word.includes(letter)) {
      // console.log(`words that don't include ${letter}`, word);
      afterGrey.push(word);
    }
  }
  return afterGrey;
}
// let newList = letterNotIncluded(wordList, 'm');
// console.log(util.inspect(newList, { maxArrayLength: null }));

//// green condition ////
// removes possibilities where letter doesn't exist
// at specific index
function letterIncludedAtPos(green, letter, pos) {
  let afterGreen = [];
  for (let word of green) {
    if (word.includes(letter) && word[pos] === letter) {
      // console.log(`words with ${letter} @ ${pos}`, word);
      afterGreen.push(word);
    }
  }
  return afterGreen;
}
// let newList = letterIncludedAtPos(wordList, 'c', 0);
// console.log(util.inspect(newList, { maxArrayLength: null }));

//return array rep wordle block assuming guess and answer
function compare(currentList, guess, answer) {

  let block = [];
  let newList = [];
  let newList = = letterIncluded(currentList, guess[0], 0);
  let i = 1;

  while (newList.length >= ()) {
    //yellow?
    newList = letterIncluded(newList, guess[i], i);
    if (newList.includes(answer)) {
      block[i] = 1;
    }
  }

  newList = currentList;

  for (i = 0; i < answer.length; i++) {
    //green
    newList = newList.letterIncludedAtPos(newList, guess[i]);
  }
}

module.exports = { letterIncluded, letterIncludedAtPos, letterNotIncluded };