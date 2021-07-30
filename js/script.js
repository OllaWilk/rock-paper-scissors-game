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

/*Get Html elements of player move*/

const hands = [...document.querySelectorAll('.buttons i')];

const imgPaper = 'img/papper.png';
const imgRock = 'img/rock.png';
const imgScissors = 'img/scissors.png'


function playerChoice() {

    /*Hand icon */

    game.playerHand = this.dataset.option

    hands.forEach(hand => hand.style.color = '');
    hands.forEach(hand => hand.style.backgroundColor = '');

    this.style.color = 'white';
    this.style.backgroundColor = '#7b6766';


    /*Hand jpg*/
    const imgHandUser = document.querySelector('.imgHandUser');

    if (this.dataset.option == 'rock') {
        imgHandUser.src = imgRock;

    } else if (this.dataset.option == 'paper') {
        imgHandUser.src = imgPaper;

    } else if (this.dataset.option == 'scissors') {
        imgHandUser.src = imgScissors;

    }

}

function aiChoice() {

    return hands[Math.floor(Math.random() * 3)].dataset.option;

}

const imgHandAi = document.querySelector('.imgHandAi');
const imgHandUser = document.querySelector('.imgHandUser');



function checkResult(player, ai) {
    if (player === ai) {
        return 'Draw !'
    } else if ((player === 'paper' && ai === "rock") || (player === 'rock' && ai === 'scissors') || (player === "scissors" && ai === 'paper')) {
        return `${player} beats ${ai}. You Win !`
    } else {
        return `${ai} beats ${player}. You Loose !`
    }
}

function publiskResult(player, ai, result) {

    document.querySelector('.result-wrap h1').textContent = result;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

    if (result == `${player} beats ${ai}. You Win !`) {

        document.querySelector('p.wins span').textContent = ++gameSummary.wins

    } else if (result == `${ai} beats ${player}. You Loose !`) {

        document.querySelector('p.loose span').textContent = ++gameSummary.loses

    }
}

function startGame() {
    if (!game.playerHand) {
        return alert('Choose your move');
    }

    game.aiHand = aiChoice()


    /*ai hand img*/

    const imgHandAi = document.querySelector('.imgHandAi');

    if (game.aiHand == 'rock') {
        imgHandAi.src = imgRock;

    } else if (game.aiHand == 'paper') {
        imgHandAi.src = imgPaper;

    } else if (game.aiHand == 'scissors') {
        imgHandAi.src = imgScissors;

    }

    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);

    publiskResult(game.playerHand, game.aiHand, gameResult);
}

document.querySelector('.startBtn').addEventListener('click', startGame);

hands.forEach(hand => hand.addEventListener('click', playerChoice));




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


