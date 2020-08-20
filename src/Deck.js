const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Deck {
  constructor(cardsInDeck) {
    this.cardsInDeck = prototypeQuestions || cardsInDeck;
  }

  countCards() {
    var cardAmount = this.cardsInDeck.length;
    return cardAmount;
  }



};



module.exports = Deck;
// npm test test/Deck-test.js
