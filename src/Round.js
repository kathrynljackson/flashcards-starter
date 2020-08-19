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
    return newTurn.evaluateGuess();
    for (var i=0; i<this.deck.length; i++) {
      this.deck[i]++;

      }
  };

  calculatePercentCorrect(){
    var totalIncorrect = this.incorrectGuesses.length;
    var percentIncorrect = totalIncorrect/this.turns;
    var percentCorrect = (0-percentIncorrect)*100;
    return percentCorrect;
  }

  endRound(){
    console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`)
  }





}

module.exports = Round;
// npm test test/Round-test.js
