let ComputerChoice;

function getComputerChoice(){
    ComputerChoice = Math.floor(Math.random() * (3) + 1);
    switch(ComputerChoice){
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

console.log(getComputerChoice());

