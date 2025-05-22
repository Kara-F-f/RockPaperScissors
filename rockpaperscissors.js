function getComputerChoice(){
    let computerChoice;
    let p = Math.random();
    if ( p < 1/3 ) {
        computerChoice =  "rock";
    } else if ( p >= 2/3 ) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    return computerChoice;
}

// function getHumanChoice() {
//     let humanChoice = prompt("Rock, paper, or Scissors?");
//     return humanChoice.toLowerCase();
// }

let humanChoice;
let count = 0;
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result")
const result1 = document.querySelector("#resultLine1");
const result2 = document.querySelector("#resultLine2");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
            humanChoice = button.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            if (humanScore == 5) {
                result2.textContent = `You win! Your score is ${humanScore}. Game Ends!`;
                result.appendChild(result2);
                humanScore = 0;
                computerScore = 0;
                count = 0;
            } else if (computerScore == 5) {
                result2.textContent = `You lost! Computer score is ${computerScore}. Game Ends!`;
                result.appendChild(result2);
                humanScore = 0;
                computerScore = 0;
                count = 0;
            } else {
                result2.textContent = "";
            }; 
    });
});



function playRound(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {           
            result1.textContent = `You Tie! Your score is now ${humanScore}`;    
        } else if ((computerChoice == "rock" && humanChoice == "paper") 
                || (computerChoice == "paper" && humanChoice == "scissor") 
                || (computerChoice == "scissor" && humanChoice == "rock")) {
                    humanScore++;
                    result1.textContent = `You win! ${humanChoice} beats ${computerChoice}. Your score is now ${humanScore}.`;
                    
        } else { 
            result1.textContent = `You lose! ${computerChoice} beats ${humanChoice}.  Your score is now ${humanScore}.`;
            computerScore++;
        }; 
    count++;
    // result.appendChild(result1);
};  



// function playGame(){
//     for (let i = 1; i <= 5; i++) {
//         const humanSelection = humanChoice;
//         // console.log(humanSelection);
//         const computerSelection = getComputerChoice();
//         console.log(computerSelection);
//         playRound(humanSelection, computerSelection);
//         // console.log(humanScore);
//     }; 
// };




