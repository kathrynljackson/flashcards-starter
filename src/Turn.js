const data = require('./data');

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
    if (this.userGuess === this.cardObject.correctAnswer) {
      return true;
    } else {
      return false;
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
