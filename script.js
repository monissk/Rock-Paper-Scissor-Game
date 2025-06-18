let choices = document.querySelectorAll(".choice");
let winMsg = document.querySelector("#winMsg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let userScoreCount = 0;
let compScoreCount = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

let playGame = (userChoice) => {
  let compChoice = genCompChoice();
  if (userChoice === compChoice) {
    winMsg.style.backgroundColor = "#d4a373";
    winMsg.innerText = "Game was Draw";
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "rock" ? true : false;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

let genCompChoice = () => {
  let compChoices = ["rock", "paper", "scissor"];
  let compChoice = Math.floor(Math.random() * 3);
  return compChoices[compChoice];
};

let showWinner = (userWin, userChoice, compChoice) => {
  console.log(userChoice);
  console.log(compChoice);
  if (userWin) {
    userScoreCount++;
    userScore.innerText = userScoreCount;
    winMsg.style.backgroundColor = "#588157";
    winMsg.innerText = `You Win!  Your ${userChoice} beats Computer's ${compChoice}`;
  } else {
    compScoreCount++;
    compScore.innerText = compScoreCount;
    winMsg.style.backgroundColor = "#e63946";
    winMsg.innerText = `You Lose.  Computer's ${compChoice} beats Your ${userChoice}`;
  }
};
