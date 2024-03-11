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


let computerSelection;
let playerChoice; 
function getPlayerChoice(){
    playerChoice = prompt("Choose rock, paper, or scissor: ");
}
let playerSelection;

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

//console.log(computerSelection);//
//console.log(playerSelection);//
// console.log(playRound(computerSelection, playerSelection)); //

let computerScore = 0;
let playerScore = 0;

while (computerScore < 3 && playerScore < 3){
    computerSelection = getComputerChoice();
    getPlayerChoice();
    playerSelection = playerChoice.toLowerCase();
    console.log("Computer Selected: " + computerSelection);
    console.log("You Selected: " + playerSelection);
    switch(playRound(computerSelection, playerSelection)){
        case "draw":
            console.log("You drew! No points.");
            break;
        case "win":
            console.log("You win the round!");
            playerScore++;
            break;
        case "lose":
            console.log("You lost the round!");
            computerScore++;
            break;
    }
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

