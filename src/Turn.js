const data = require('./data');
//const prototypeQuestions = data.prototypeData;
//const util = require('./util');
//const Round = require('../src/Round');
//const Deck = require('../src/Deck');

class Turn {
  constructor(userGuess, cardObject) {
    this.userGuess = userGuess;
    this.cardObject = cardObject;
  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.cardObject
  }

  evaluateGuess() {
    // const deck = new Deck();
    //const round = new Round();
    if (this.userGuess === this.cardObject.correctAnswer) {
      return true;
    } else {
      return false;
      // Round.incorrectGuesses.push(this.cardObject[i].id)
      // return Round.icorrectGuesses;
    }
  }

  giveFeedback() {
    if (this.userGuess === this.cardObject.correctAnswer) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }

}
module.exports = Turn;
