let playerScore = 0;
let computerScore = 0;

//Targets buttons and adds a click event
let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return playRound();
    });
});

//Target div
let div = document.querySelector('div');

//Gives a random value to the computer
function computerPlay() {
    let myArray = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random() * myArray.length);
    return (randomChoice, myArray[randomChoice]);
}

//Plays a round of rock, paper, scissors
function playRound() {

    let computerSelection = computerPlay();
    let playerSelection = 'Rock' || 'Paper' || 'Scissors';
     
    if (playerSelection === computerSelection) {
        let tie = document.createElement('div');
        tie.textContent = `We Have a Tie!
        Player Score: ${playerScore} to Computer Score: ${computerScore}`;

        div.appendChild(tie);
    } 

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper'))
        {
        playerScore++
        let player = document.createElement('div');
        player.textContent = `You have won this round!
        Player Score: ${playerScore} to Computer Score: ${computerScore}`;

        div.appendChild(player);
    }
    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper'))
        {
        computerScore++
        let computer = document.createElement('div');
        computer.textContent = `The computer has won this round!
        Player Score: ${playerScore} to Computer Score: ${computerScore}`;

        div.appendChild(computer);
    } 
    if (playerScore >= 5) {
        let win = document.createElement('div');
        win.textContent = 'You have won the game! :)';

        div.appendChild(win);
    }
    if (computerScore >= 5) {
        let lose = document.createElement('div');
        lose.textContent = 'The computer has won the game! :(';

        div.appendChild(lose);
    }
         
}   






        