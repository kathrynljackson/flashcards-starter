const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck;
    this.turns = 0;
    this.incorrectGuesses = [];

  }

  returnCurrentCard() {
    return this.deck[0];
  }

  taketurn() {
    var newTurn = new Turn;
    this.turns++;
    
  }

}

module.exports = Round;
// npm test test/Round-test.js
