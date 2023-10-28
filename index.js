var getChoice = function() {
  var playersChoice = prompt('Choose rock, paper, or scissors');
  while (playersChoice !== "rock" && playersChoice !== "paper" && playersChoice !== "scissors") {
    if (playersChoice === null) {
      break;
    }
    playersChoice = prompt("Please choose rock, paper, or scissors");
  }
  return playersChoice;
}

var getCompChoice = function () {
  randomChoice = Math.random();
  if (randomChoice < 0.3333) {
    return "rock";
  }
  if (randomChoice > 0.3333 && randomChoice < 0.6666) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

var compChoice = getCompChoice();
var playersChoice = getChoice();

var getWinner = function (playersChoice, compChoice) {
  if (compChoice === playersChoice) {
    return "draw";
  } else if (compChoice === "paper") {
    if (playersChoice === "scissors") {
      return "player";
    } else if (playersChoice === "rock") {
      return "computer"
    }
  } else if (compChoice === "rock") {
    if (playersChoice === "scissors") {
      return "computer";
    } else if (playersChoice === "paper") {
      return "player"
    }
  } else if (compChoice === "scissors") {
    if (playersChoice === "rock") {
      return "player";
    } else if (playersChoice === "paper") {
      return "computer"
    }
  }
}

var singleGame = function() {
  var winner = getWinner(playersChoice, compChoice);
  var message = "You chose " + playersChoice + ": computer chose " + compChoice;
  if (winner === "player") {
    alert(message + "\nYou won!");
  } else if (winner === "computer") {
    alert(message + "\nYou lost!");
  } else {
    alert(message + "\nDraw");
  }
  return winner;
}

var bestOfThree = function() {
  var playerCount = 0;
  var computerCount = 0;
  while (playerCount < 2 && computerCount < 2) {
    var winner = singleGame();
    if (winner === 'player') {
      playerCount++;
    } else if (winner === 'computer') {
      computerCount++;
    }
    alert('Player score: ' + playerCount + ' - Computer Score: ' + computerCount);
  }
  var message = 'Player score: ' + playerCount + ' - Computer Score: ' + computerCount;
  if (playerCount === 2) {
    alert(message + "\nYou won!!");
  } else {
    alert(message + "\nComputer won.");
  }
}

var mode = prompt("please insert 1 for single mode\n 3 for best of 3 mode .");
if (mode === '1') {
  singleGame();
} else if (mode === '3') {
  bestOfThree();
}