const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;

  }

  start(){
    var cards = new Cards;
    var deck = new Deck;
    var round = new Round(deck);
  }


  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}



module.exports = Game;
