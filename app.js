const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
// Draw Game Function
let drawGame = () => {
  msg.innerText = "Game Draw. Play Again";
  msg.style.backgroundColor = "#023047";
};
// Generate Computer choice
let genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
// Show winner function
let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
// Main game function
let playGame = (userChoice) => {
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, scissors
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
// Event listener add and user choice acess
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
