//const data = require('./data');
//const prototypeQuestions = data.prototypeData;
//const util = require('./util');
const Turn = require('../src/Turn');
//const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    var deck = new Deck;
    this.deck = deck.cardsInDeck;
    this.turns = 0;
    this.incorrectGuesses = [];

  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(userGuess) {
    var currentCard = this.returnCurrentCard();
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
    //var percentCorrect = (0-percentIncorrect)*(-100);
    var percentCorrect = 100 - (percentIncorrect * 100)
    return percentCorrect;
  }

  endRound() {

    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }





}

module.exports = Round;
// npm test test/Round-test.js
