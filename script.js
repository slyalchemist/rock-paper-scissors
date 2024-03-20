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
let computerScore = 0;
let playerScore = 0;
let playerSelection;

const btn = document.querySelectorAll("button");
const container = document.querySelector("#container");
const comp = document.querySelector(".comp");
const play = document.querySelector(".play");
const selections = document.querySelector("#scoresheet");
const winner = document.querySelector("#winner");

container.appendChild(selections);
container.appendChild(comp);
container.appendChild(play);
container.appendChild(winner);

comp.innerHTML = "Computer Score: " + computerScore;
play.innerHTML = "Player Score: " + playerScore;

btn.forEach((button) => {
    button.addEventListener("click", () => {
        winner.textContent = " ";
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        selections.innerHTML = "You selected " + playerSelection + ". The computer selected " + computerSelection + ".";
        console.log(`You selected ${playerSelection}. The computer has selected ${computerSelection}.`);
        checkScore();
        comp.innerHTML = "Computer Score: " + computerScore;
        play.innerHTML = "Player Score: " + playerScore;
        if(computerScore == 5){
            winner.textContent = "You lost! The computer won! Select an option to play again!";
            computerScore = 0;
            playerScore = 0;
        }
        else if(playerScore == 5){
            winner.textContent = "You won! Select an option to play again!";
            computerScore = 0;
            playerScore = 0;
        }
    });    
});


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

function checkScore(){
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
    };
}

