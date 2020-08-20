const http = require('http');
let app = http.createServer();
const Game = require('../flashcards-starter/src/Game');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

//instantiate a new Game object
//run node index.js in this terminal

const game = new Game()
game.start();

//module.exports = main;
