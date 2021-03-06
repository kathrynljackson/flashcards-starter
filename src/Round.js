const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(userGuess) {
    const currentCard = this.returnCurrentCard();
    this.turns++;
    console.log(this.turns)
    const newTurn = new Turn(userGuess, currentCard);
    if (newTurn.evaluateGuess() != true) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    var totalIncorrect = this.incorrectGuesses.length;
    var percentIncorrect = totalIncorrect / this.turns;
    var percentCorrect = 100 - (percentIncorrect * 100)
    return percentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
