const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Cards = require('../src/Deck');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  start() {
    this.printMessage();
    this.printQuestion();
  }


  printMessage(deck) {
      var deck = new Deck;
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    var round = new Round(deck);
    var deck = new Deck;
      util.main(round);
  }
}

module.exports = Game;
