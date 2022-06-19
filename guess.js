let secretNumber = Math.trunc(Math.random() * 100) + 1;
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
let score = 100;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    message.textContent = "✋ Enter a Number";
    // when player wins
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 10) {
      message.textContent = "🪁 Too High!";
      score -= 10;
      scoreMessage.textContent = score;
    } else {
      message.textContent = "You lost the game! 🙁";
      scoreMessage.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 10) {
      message.textContent = "🪁 Too Low!";
      score -= 10;
      scoreMessage.textContent = score;
    } else {
      message.textContent = "You lost the game! 🙁";
      scoreMessage.textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  message.textContent = "Start guessing";
  scoreMessage.textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
