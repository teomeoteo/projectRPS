function askPlayer() {
  let answer = prompt("Do you want to continue? (yes/no) You'll need your console open.");

if (answer && answer.toLowerCase() === "yes") {
    console.log("Let's play!");
    playGame();
} else {
    console.log("Okay! If you wish to play you can type 'playGame()' in the console!");
}
}

var humanScore = 0;
var computerScore = 0;

askPlayer();

function playGame () {

  const validChoices = ["Rock", "Paper", "Scissors"];

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
    humanChoice = humanSelection;
    computerChoice = computerSelection;
    let humanChoiceValue = getChoiceValue(humanChoice);
    let computerChoiceValue = getChoiceValue(computerChoice);

    if (humanChoiceValue !== null && computerChoiceValue !== null) {

      if (computerChoiceValue > humanChoiceValue && (computerChoiceValue+humanChoiceValue)%2 !== 0) {
        console.log("Computer wins!");
        computerScore++;
      }
  
      else if (computerChoiceValue === humanChoiceValue) {
        console.log("It's a tie!");
      }
  
      else {
        console.log("You won!");
        humanScore++;
      }
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
  
  function getHumanChoice () {
    let choice = prompt("Enter your Choice");
    if (validChoices.includes(choice)) {
      console.log("Player Choice: " + choice);
      return choice;
    }

    else if (choice === null) {
      console.log("Game Cancelled");
      return choice;
    }

    else {
      console.log("Invalid Choice");
      return getHumanChoice();
    }
  }
  
  function getComputerChoice() {
    let choiceNumber = Math.random();
    let choice;
    if (choiceNumber < 1/3) {
      choice = "Rock";
    }
    else if (choiceNumber < 2/3) {
      choice = "Paper";
    }

    else {
      choice = "Scissors";
    }
    console.log("Computer Choice: " + choice);
    return choice;
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
}