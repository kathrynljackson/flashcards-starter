const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Cards = require('../src/Deck');


const main = require('./util');
//dont know if I need this^

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  start(){
    var cards = new Cards;
    var deck = new Deck;
    var round = new Round(prototypeQuestions);
    //console.log(prototypeQuestions) THIS IS GOOD, but figure out how to use it
    var printMessage = this.printMessage();
    var printMessage = this.printQuestion();
  }


  printMessage(deck, round) {
      var deck = new Deck;
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}



module.exports = Game;
