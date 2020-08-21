const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor(round) {
    this.round = null;
  }

  start() {
    //var cards = new Card();

    //need to iterate through the prototypeData array and make each object in that Array
    //an instance of the Card class

    const cards = prototypeQuestions.map(card =>
      new Card(
        card['id'],
        card['question'],
        card['answers'],
        card['correctAnswer'],
    ));
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
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
