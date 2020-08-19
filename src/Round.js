const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck;
    this.turns = 0;
    this.incorrectGuesses = [];

  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(userGuess) {
    this.turns++;
    var currentCard = this.returnCurrentCard();
    const newTurn = new Turn(userGuess, currentCard);
    return newTurn.giveFeedback();
    for (var i=0; i<this.deck.length; i++) {
      this.deck[i]++;
      console.log('loop works!')
    };
    if (this.userGuess != this.cardObject.correctAnswer) {
      console.log(this.incorrectGuesses)
       this.incorrectGuesses.push(this.deck[i].id)
    }


  };




}

module.exports = Round;
// npm test test/Round-test.js
