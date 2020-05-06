
let possibleChoice = ['rock', 'paper', 'scissors']
let wins = 0
let losses = 0
let ties = 0

function play(playerChoice) {
  let computersChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];

  if (computersChoice == 'rock' && playerChoice == 'rock') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked rock. It was a tie! </h1>"
    ties++
    document.getElementById("tied").innerText = ties.toString()
  } else if (computersChoice == 'rock' && playerChoice == 'paper') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked rock. You have won! </h1>"
    wins++
    document.getElementById("winner").innerText = wins.toString()
  } else if (computersChoice == 'rock' && playerChoice == 'scissors') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked rock. You were destroyed! </h1>"
    losses++
    document.getElementById("loser").innerText = losses.toString()
  }

  if (computersChoice == 'paper' && playerChoice == 'rock') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked paper. You were destroyed! </h1>"
    losses++
    document.getElementById("loser").innerText = losses.toString()
  } else if (computersChoice == 'paper' && playerChoice == 'paper') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked paper. It was a tie! </h1>"
    ties++
    document.getElementById("tied").innerText = ties.toString()
  } else if (computersChoice == 'paper' && playerChoice == 'scissors') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked paper. You have won! </h1>"
    wins++
    document.getElementById("winner").innerText = wins.toString()
  }

  if (computersChoice == 'scissors' && playerChoice == 'rock') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked scissors. You have won! </h1>"
    wins++
    document.getElementById("winner").innerText = wins.toString()
  } else if (computersChoice == 'scissors' && playerChoice == 'paper') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked scissors. You were destroyed! </h1>"
    losses++
    document.getElementById("loser").innerText = losses.toString()
  } else if (computersChoice == 'scissors' && playerChoice == 'scissors') {
    document.getElementById("game-result").innerHTML = "<h1> The computer picked scissors. It was a tie! </h1>"
    ties++
    document.getElementById("tied").innerText = ties.toString()
  }
}



