/************Function Declaration*******/

const getUserChoice = (userInput) => {
  
  userInput = userInput.toLowerCase();
  return (userInput === 'rock') ? userInput
  :(userInput === 'paper') ? userInput
  :(userInput === 'scissors') ? userInput
  :(userInput === 'bomb') ? userInput
  :console.log(userInput + " is not a valid choice!")
  //:userInput + " is not a valid choice!"
};

const getComputerChoice = () => {
  const max=2;
  const min=0;
  //console.log(computerChoice);
  switch (Math.floor(Math.random() * (max - min + 1)) + min){
  case 0: return "rock";
   break;
  case 1: return "paper";
   break;
  case 2: return "scissors";
   break;   
  default: console.log("Invalid computer choice!");
   break;    
  }
};

const determineWinner = (userChoice,computerChoice) =>{
/*Rock destroys scissors.
Scissors cut paper.
Paper covers rock.*/
if (userChoice === computerChoice) {
  console.log("Tie!")} 
  else if (userChoice === "bomb"){ console.log("Winner!")} 

  else if (userChoice === "rock" && computerChoice === 	'scissors'){ console.log("Winner!")} 

	else if (userChoice === "paper" && computerChoice === 'rock'){ console.log("Winner!")} 

  else if (userChoice === "scissors" && computerChoice === 'paper'){ console.log("Winner!")} 
  
  else {console.log("Loser!")} 
  
};
 
const playGame = (userChoice,computerChoice) =>{
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);  
determineWinner(userChoice,computerChoice);
  
};
let input = prompt('Enter input value');
playGame(getUserChoice(input),getComputerChoice());
//function test 
/*let dummy = getComputerChoice();
console.log(dummy);
determineWinner(getUserChoice("sdhg"),dummy);*/

  
 
