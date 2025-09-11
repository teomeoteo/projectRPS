/* function askPlayer() {
  let answer = prompt("Do you want to continue? (yes/no) You'll need your console open.");

if (answer && answer.toLowerCase() === "yes") {
    console.log("Let's play!");
    playGame();
} else {
    console.log("Okay! If you wish to play you can type 'playGame()' in the console!");
}
} */

// THE UI SETUP

const container = document.querySelector("body");

const choiceDiv = document.createElement("div");
choiceDiv.style.cssText = "height: 200px; width: 500px; background-color:rgb(173, 173, 173); display: flex; align-items: center; flex-direction: column; gap: 30px;"

const buttonsDiv = document.createElement("div");
buttonsDiv.style.cssText = "display: flex; gap: 20px;"

const h1Choice = choiceDiv.appendChild(document.createElement("h1"));

h1Choice.textContent = "Choose:";


const validChoices = ["Rock", "Paper", "Scissors"];
const buttons = validChoices.map(a => {
  let el = document.createElement("button");
  el.textContent = a;
  el.style.cssText = "height: 50px; width: 100px;"
  el.addEventListener("click", function (e) { //here we play on button click
    let playerChoice = e.target.textContent;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
  });
  return el;
});

const playerScoreCount = document.createElement("p");
const computerScoreCount = document.createElement("p");
const roundOutcome = document.createElement("h2");

container.appendChild(choiceDiv);
choiceDiv.appendChild(buttonsDiv);
buttons.forEach(a => buttonsDiv.appendChild(a));

container.appendChild(roundOutcome);
container.appendChild(playerScoreCount);
container.appendChild(computerScoreCount);

// THE GAME

var humanScore = 0;
var computerScore = 0;

/* askPlayer(); */

function getChoiceValue(choice) {
  let value;
  if (choice === "Rock") {
    value = 1;
  }
  else if (choice === "Paper") {
    value = 2;
  }
  else if (choice === "Scissors") {
    value = 3;
  }

  else {
    value = null;
  }

  return value;
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceValue = getChoiceValue(humanChoice);
  let computerChoiceValue = getChoiceValue(computerChoice);

  if (humanChoiceValue !== null && computerChoiceValue !== null) {

    if (computerChoiceValue > humanChoiceValue && (computerChoiceValue + humanChoiceValue) % 2 !== 0) {
      console.log("Computer wins!");
      computerScore++;
      roundOutcome.textContent = `Your ${humanChoice} vs. Computer's ${computerChoice} - Computer won!`
    }

    else if (computerChoiceValue === humanChoiceValue) {
      console.log("It's a tie!");
      roundOutcome.textContent = `Your ${humanChoice} vs. Computer's ${computerChoice} - It's a tie`
    }

    else {
      console.log("You won!");
      humanScore++;
      roundOutcome.textContent = `Your ${humanChoice} vs. Computer's ${computerChoice} - You won!`
    }
  }

  console.log("Human score: " + humanScore);
  playerScoreCount.textContent = "Human Score: " + humanScore;
  console.log("Computer score: " + computerScore);
  computerScoreCount.textContent = "Computer Score: " + computerScore;

  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      if (humanScore > computerScore) {
        alert("You won!");
        alert("Final Score" + "\n" + "You: " + humanScore + "\n" + "Computer: " + computerScore);
      }

      else if (computerScore > humanScore) {
        alert("You lost!");
        alert("Final Score" + "\n" + "You: " + humanScore + "\n" + "Computer: " + computerScore);
      }

      humanScore = 0;
      computerScore = 0;
      playerScoreCount.textContent = "Human Score: " + humanScore;
      computerScoreCount.textContent = "Computer Score: " + computerScore;
    }, 50)
  }

}

function getComputerChoice() {
  let choiceNumber = Math.random();
  let choice;
  if (choiceNumber < 1 / 3) {
    choice = "Rock";
  }
  else if (choiceNumber < 2 / 3) {
    choice = "Paper";
  }

  else {
    choice = "Scissors";
  }
  console.log("Computer Choice: " + choice);
  return choice;
}

