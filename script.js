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

function getHumanChoice(){
  return prompt;
}
