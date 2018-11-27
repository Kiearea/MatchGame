var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function() {
  var $game = $('#game');
  var numbers = MatchGame.generateCardValues();
  MatchGame.renderCards(numbers, $game);
})

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
var sequential = []

for (var value = 1; value <= 8; value++) {
  sequential.push('value');
  sequential.push('value');
}

var random = []

while (sequential.length > 0) {
  var randomIndex = Math.floor(Math.random() * 8);
  var randomValue = sequential.splice(randomIndex, 1)[0];
  random.push(randomValue);
}

return random;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
