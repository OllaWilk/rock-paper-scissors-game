/* Random number from 1-3 */
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Random number is: ' + randomNumber);

/* Assign a number to move */

function getMoveName(moveId) {
    if (moveId === 1) {
        return "rock";
    } else if (moveId === 2) {
        return "paper";
    } else if (moveId === 3) {
        return "scissors";
    } else {
        printMessage(moveId + " ? " + "I don't know that move.");
        return "undefind move."
    }
}

/* Computer move */

let computerMove = getMoveName(randomNumber);
console.log('Computer move: ' + computerMove);
printMessage(`My move: ${computerMove}`);

/* Player move */
let playerMove = getMoveName(Number(prompt('Choose your move ! 1. Rock, 2. Paper, 3. Scissors')));
console.log('Your move: ' + playerMove);
printMessage(`Your move: ${playerMove}`);

/* Game */

function displayResult(computerMove, playerMove) {
    printMessage(`Computer move: ${computerMove}. Your move: ${playerMove}`);

    if (computerMove === "rock" && playerMove === "paper") {
        return printMessage("You win! ");
    } else if (computerMove === "rock" && playerMove === "scissors") {
        return printMessage("You lose! ");
    } else if (computerMove === "paper" && playerMove === "rock") {
        return printMessage("You lose! ");
    } else if (computerMove === "paper" && playerMove === "scissors") {
        return printMessage("You win! ");
    } else if (computerMove === "scissors" && playerMove === "paper") {
        return printMessage("You lose! ");
    } else if (computerMove === "scissors" && playerMove === "rock") {
        return printMessage("You win! ");
    } else if (computerMove === playerMove) {
        return printMessage("DRAW ");
    } else {
        return printMessage("I don't know that move. Try again! ");
    }
}

displayResult(computerMove, playerMove);




/*if (randomNumber === 1) {

    computerMove = 'rock';

} else if (randomNumber === 2) {

    computerMove = 'paper';

} else {

    computerMove = 'scissors';
} */



// /* Player move */
// let playerMove = Number(prompt('Choose your move ! 1. Rock, 2. Paper, 3. Scissors'));

// if (isNaN(playerMove)) {

//     printMessage(`It is not a number`);

// } else {

//     if (playerMove === 1) {

//         playerMove = 'rock';

//     } else if (playerMove === 2) {

//         playerMove = 'paper';

//     } else if (playerMove === 3) {

//         playerMove = 'scissors';

//     } else if (playerMove >= 3) {

//         alert('Choose number from 1 to 3');
//     }

//     printMessage(`Youre move is: ${playerMove}`);


// }

// /* Result */

// if (playerMove === 'rock' && computerMove === 'paper') {

//     printMessage('You loose');

// } else if (playerMove === 'rock' && computerMove === 'scissors') {

//     printMessage('You won');

// } else if (playerMove === 'paper' && computerMove === 'rock') {

//     printMessage('You won');

// } else if (playerMove === 'paper' && computerMove === 'scissors') {

//     printMessage('You loose');

// } else if (playerMove === 'scissors' && computerMove === 'rock') {

//     printMessage('You loose');

// } else if (playerMove === 'scissors' && computerMove === 'paper') {

//     printMessage('You won');

// } else if (playerMove === computerMove) {

//     printMessage('DRAW')

// } else

//     printMessage(' Choose number 1, 2 or 3 ')

