let computerChoice;


function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * (3) + 1);
    switch(computerChoice){
        case 1:
            return "rock";
        break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissor";
            break;
    }
} 


const computerSelection = getComputerChoice();
const playerChoice = prompt("Choose rock, paper, or scissor: ");
const playerSelection = playerChoice.toLowerCase();

function playRound(computerSelection, playerSelection){
    switch(computerSelection){
        case "rock":
            if(playerSelection == "rock"){
                return "draw";
            }
            else if(playerSelection == "paper"){
                return "win";
            }
            else if(playerSelection == "scissor"){
                return "lose";
            }
        break;
        case "paper":
            if(playerSelection  == "rock"){
                return "lose";
            }
            else if(playerSelection == "paper"){
                return "draw";
            }
            else if(playerSelection == "scissor"){
                return "win";
            }
        break;
        case "scissor":
            if(playerSelection == "rock"){
                return "win";
            }
            else if(playerSelection == "paper"){
                return "lose";
            }
            else if(playerSelection == "scissor"){
                return "draw";
            }
        break;
    }
}

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(computerSelection, playerSelection));



