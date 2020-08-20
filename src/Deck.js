const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Deck {
  constructor(cardsInDeck) {
    this.cardsInDeck =  cardsInDeck || prototypeQuestions;
  }

  countCards() {
    var cardAmount = this.cardsInDeck.length;
    return cardAmount;
  }
}

module.exports = Deck;
