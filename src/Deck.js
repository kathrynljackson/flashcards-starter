const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Deck {
  constructor(cardsInDeck) {
    this.cardsInDeck = cardsInDeck;
  }

  countCards() {
    const cardAmount = this.cardsInDeck.length;
    return cardAmount;
  }
}

module.exports = Deck;
