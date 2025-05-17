function getComputerChoice(){
    let computerChoice;
    let p = Math.random();
    if ( p < 1/3 ) {
        computerChoice =  "rock";
    } else if ( p >= 2/3 ) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or Scissors?");
    return humanChoice.toLowerCase();
}





function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == humanChoice) {
                console.log("You Tie!");
            } else if ((computerChoice == "rock" && humanChoice == "paper") 
                    || (computerChoice == "paper" && humanChoice == "scissors") 
                    || (computerChoice == "scissors" && humanChoice == "rock")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            } else { 
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            } 
    }  
    for (let i = 1; i <= 3; i++) {
        const humanSelection = getHumanChoice();
        // console.log(humanSelection);
        const computerSelection = getComputerChoice();
        // console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        // console.log(humanScore);
    }
    return (`Human score is ${humanScore}, and computer score is ${computerScore}.`);
    
}

console.log(playGame());




