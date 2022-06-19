let secretNumber = Math.trunc(Math.random() * 100) + 1;
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
let score = 100;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;
check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    message.textContent = "✋ Enter a Number";
    // when player wins
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.textContent = secretNumber;
    again.style.display = "block";
    check.style.display = "none";
    document.querySelector(".guess").style.display = "none";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 10) {
      message.textContent =
        guess > secretNumber ? "🪁 Too High!" : "📌 Too Low!";
      score -= 10;
      scoreMessage.textContent = score;
      document.querySelector(".guess").style.transform = "rotateY(360deg)";
      document.querySelector(".guess").value = "";
    } else {
      message.textContent = "You lost the game! 🙁";
      scoreMessage.textContent = 0;
      again.style.display = "block";
      check.style.display = "none";
      document.querySelector(".guess").style.display = "none";
      message.textContent = `The number was ${secretNumber} 🎯`;
    }
  }
});

again.addEventListener("click", () => {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  message.textContent = "Start guessing";
  scoreMessage.textContent = score;
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  number.style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  check.style.display = "inline-block";
  again.style.display = "none";
  document.querySelector(".guess").style.display = "inline-block";
});
document.querySelector(".guess").onkeydown = function enter(e) {
  // console.log(e);
  if (e.keyCode === 13) {
    check.click();
  }
};
