const gameSummary = {

    numbers: 0,
    wins: 0,
    loses: 0,
    draws: 0
}

const game = {
    playerHand: '',
    aiHand: '',
}
/*Get Html elements of player move and add player moove*/

const hands = [...document.querySelectorAll('.buttons i')];
const imgHand = ['img/rock.png', 'img/papper.png', 'img/scissors.png'];

function playerChoice() {

    console.log('this', this);
    game.playerHand = this.dataset.option
    console.log(game.playerHand);

    hands.forEach(hand => hand.style.color = '');
    hands.forEach(hand => hand.style.backgroundColor = '');
    this.style.color = 'white';
    this.style.backgroundColor = '#7b6766';


}
function aiChoice() {

    //const aiHand = ;?
    return aiHand

}


function startGame() {
    console.log('start gry')

    if (!game.playerHand) {
        return alert('Choose your move');
    }

    game.aiHand = aiChoice()
}

document.querySelector('.socialmedia').addEventListener('click', startGame)

hands.forEach(hand => hand.addEventListener('click', handSelection));




/*2*/
// {
//     // const rock = document.getElementById('play-rock');
//     const paper = document.getElementById('play-paper');
//     const scissors = document.getElementById('play-scissors');

//     /*Get html elements*/

//     function playGame(playerInput) {
//         clearMessages();
//         /* Random number from 1-3 */
//         let randomNumber = Math.floor(Math.random() * 3 + 1);
//         console.log('Random number is: ' + randomNumber);

//         /* Assign a number to move */

//         function getMoveName(moveId) {
//             if (moveId === 1) {
//                 return "rock";
//             } else if (moveId === 2) {
//                 return "paper";
//             } else if (moveId === 3) {
//                 return "scissors";
//             } else {
//                 printMessage(moveId + " ? " + "I don't know that move.");
//                 return "undefind move."
//             }
//         }

//         /* Computer move */

//         let computerMove = getMoveName(randomNumber);
//         console.log('Computer move: ' + computerMove);
//         printMessage(`My move: ${computerMove}`);

//         /* Player move */
//         let playerMove = getMoveName(playerInput);
//         // let playerMove = getMoveName(Number(prompt('Choose your move ! 1. Rock, 2. Paper, 3. Scissors')));
//         console.log('Your move: ' + playerMove);
//         printMessage(`Your move: ${playerMove}`);

//         /* Game */

//         function displayResult(computerMove, playerMove) {
//             // printMessage(`Result: ${computerMove}. Your move: ${playerMove}`);

//             if (computerMove === "rock" && playerMove === "paper") {
//                 return printMessage("You win! ");
//             } else if (computerMove === "rock" && playerMove === "scissors") {
//                 return printMessage("You lose! ");
//             } else if (computerMove === "paper" && playerMove === "rock") {
//                 return printMessage("You lose! ");
//             } else if (computerMove === "paper" && playerMove === "scissors") {
//                 return printMessage("You win! ");
//             } else if (computerMove === "scissors" && playerMove === "paper") {
//                 return printMessage("You lose! ");
//             } else if (computerMove === "scissors" && playerMove === "rock") {
//                 return printMessage("You win! ");
//             } else if (computerMove === playerMove) {
//                 return printMessage("DRAW ");
//             } else {
//                 return printMessage("I don't know that move. Try again! ");
//             }
//         }

//         displayResult(computerMove, playerMove);

//     }

//     rock.addEventListener('click', () => playGame(1));
//     paper.addEventListener('click', () => playGame(2));
//     scissors.addEventListener('click', () => playGame(3));
// }


