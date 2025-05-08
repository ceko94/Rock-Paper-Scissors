function getComputerChoice(){
  let randomNumber= Math.random()*3;
  let randomInt = Math.floor(randomNumber);
  if(randomInt === 0){
  return "rock";
  } else if (randomInt === 1){
  return "paper";
  } else {
  return "scissors";
  }
}


function getHumanChoice() {
  const userInput = prompt("Enter your choice: rock, paper, or scissors");
  return userInput;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  // Make both choices case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // Define winning conditions
  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both chose " + humanChoice);
    return 0;  // No one wins, return 0
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    return 1;  // Human wins, return 1
  } else {
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    return -1;  // Computer wins, return -1
  }
}

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the human's choice (using prompt for input)
function getHumanChoice() {
  const userInput = prompt("Enter your choice (rock, paper, or scissors):");
  return userInput;
}

// Function to play 5 rounds of the game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    const roundResult = playRound(humanChoice, computerChoice);
    
    if (roundResult === 1) {
      humanScore++;
    } else if (roundResult === -1) {
      computerScore++;
    }
    
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log('---------------------------------');
  }

  // Declare the winner after 5 rounds
  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.log(`The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
}

// Start the game
playGame();
