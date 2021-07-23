/* Random number from 1-3 */

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Random number is: ' + randomNumber);

/* Computer move */

let computerMove = '';

if (randomNumber === 1) {

    computerMove = 'rock';

} else if (randomNumber === 2) {

    computerMove = 'paper';

} else {

    computerMove = 'scissors';
}

printMessage(`My move: ${computerMove}`);

/* Player move */
let playerMove = Number(prompt('Choose your move ! 1. Rock, 2. Paper, 3. Scissors'));

if (isNaN(playerMove)) {

    printMessage(`It is not a number`);

} else {

    if (playerMove === 1) {

        playerMove = 'rock';

    } else if (playerMove === 2) {

        playerMove = 'paper';

    } else if (playerMove === 3) {

        playerMove = 'scissors';

    } else if (playerMove >= 3) {

        alert('Choose number from 1 to 3');
    }

    printMessage(`Youre move is: ${playerMove}`);


}

/* Result */

if (playerMove === 'rock' && computerMove === 'paper') {

    printMessage('You loose');

} else if (playerMove === 'rock' && computerMove === 'scissors') {

    printMessage('You won');

} else if (playerMove === 'paper' && computerMove === 'rock') {

    printMessage('You won');

} else if (playerMove === 'paper' && computerMove === 'scissors') {

    printMessage('You loose');

} else if (playerMove === 'scissors' && computerMove === 'rock') {

    printMessage('You loose');

} else if (playerMove === 'scissors' && computerMove === 'paper') {

    printMessage('You won');

} else if (playerMove === computerMove) {

    printMessage('DRAW')

} else

    printMessage(' Choose number 1, 2 or 3 ')

