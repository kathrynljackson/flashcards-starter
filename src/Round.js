const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck;
  }

}

module.exports = Round;
// npm test test/Round-test.js
