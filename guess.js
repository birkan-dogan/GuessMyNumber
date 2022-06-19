const secretNumber = Math.trunc(Math.random() * 100) + 1;
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
let score = 100;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    message.textContent = "👈 Enter a Number";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number!";
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
      message.textContent = "🪁 Too High!";
      score -= 10;
      scoreMessage.textContent = score;
    } else {
      message.textContent = "You lost the game! 🙁";
      scoreMessage.textContent = 0;
    }
  }
});
