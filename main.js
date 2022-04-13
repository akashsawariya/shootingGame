const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const result = document.querySelector(".result h4");
const shootButton = document.querySelector(".shootbtn");

let player1Health = 100;
let player2Health = 100;
let roundCount = 0;
let player1Score = 0;
let player2Score = 0;

function shootBtn() {
  let player1Fire = Math.floor(Math.random() * 5);
  let player2Fire = Math.floor(Math.random() * 5);

  player1.innerHTML = player1Score;
  player2.innerHTML = player2Score;

  player1Health = player1Health - player2Fire;
  player2Health = player2Health - player1Fire;
  roundCount++;

  if (player1Health == 0) {
    shootButton.innerHTML = "Game Over";
  }
  if (player2Health == 0) {
    shootButton.innerHTML = "Game Over";
  }

  if (roundCount == 5) {
    shootButton.disabled = true;
    shootButton.innerHTML = "Game Over";
  }

  if (player1Fire > player2Fire) {
    player1Score += 1;
    console.log(player1Score);
  }
  if (player2Fire > player1Fire) {
    player2Score += 1;
    console.log(player1Score);
  }

  if (player1Score == 3) {
    gameEnd("Player 1 Win");
  }
  if (player2Score == 3) {
    gameEnd("Player 2 Win");
  }

  if (roundCount == 5) {
    if (player1Score > player2Score) {
      gameEnd("Player 1 Win");
    }

    if (player2Score > player1Score) {
      gameEnd("Player 2 Win");
    }

    if (player2Score == player1Score) {
      gameEnd("Draw");
    }
  }
}

function gameEnd(text) {
  result.innerHTML = text;
  result.style.display = "block";
  shootButton.disabled = true;
  shootButton.innerHTML = "Game Over";
}

function reset() {
  location.reload();
}
