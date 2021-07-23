/* Random number from 1-3 */

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

/* Computer move */

let computerMove = '';

if (randomNumber === 1) {

    computerMove = 'rock';

} else if (randomNumber === 2) {

    computerMove = 'paper';

} else {

    computerMove = 'scissors';
}

console.log('ruch komputera ' + computerMove);

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

    console.log('ruch gracza ' + playerMove);
    printMessage(`Youre move is: ${playerMove}`);

}

