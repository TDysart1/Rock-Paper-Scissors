'use strict'

let youScore = 0;
let oppScore = 0;
let userScore_span = document.getElementById('your-score');
let oppScore_span = document.getElementById('opp-score');
let results_select = document.querySelector('.results > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

//refresh page 
// function refreshPage() {
//     let button_Refresh = document.createElement('button');
//     button_Refresh.innerHTML = 'REFRESH';
//     button_Refresh.appendChild()
//     button_Refresh.addEventListener('click', function() {
//         location.reload();
//     })
// }
//score count to 
function winnerDeclared() {

    if (youScore === 7) alert('You won! Press ok to play again.')


    if (oppScore === 7) alert('You lost! Press ok to play again.')

}
//convert to words 
function convertWords(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Sisscors';

}
//win function 
function win(userChoice, oppChoice) {
    youScore++;
    userScore_span.innerHTML = youScore;
    oppScore_span.innerHTML = oppScore;
    results_select.innerHTML = `${convertWords(userChoice)} beats ${convertWords(oppChoice)}! You Win!`;
}

//lose function 
function lose(userChoice, oppChoice) {
    oppScore++;
    oppScore_span.innerHTML = oppScore;
    userScore_span.innerHTML = youScore;
    results_select.innerHTML = `${convertWords(userChoice)} lost to ${convertWords(oppChoice)}! You Lost!`;
}

//tie function 
function tie(userChoice, oppChoice) {
    console.log('you tied')
    results_select.innerHTML = `${convertWords(userChoice)} ties ${convertWords(oppChoice)}!`;
}

//random selections
function numGenerate() {
    const choices = ['r', 'p', 's'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function game(userChoice) {
    const oppChoice = numGenerate();
    switch (userChoice + oppChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('You win!')
            win(userChoice, oppChoice);

            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('Opponent Wins!')
            lose(userChoice, oppChoice);

            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('TIE!')
            tie(userChoice, oppChoice);
            break;
    }

}


//when you click rock 
function mainClick() {
    rock_div.addEventListener('click', () => game('r'))
        //when you click paper 
    paper_div.addEventListener('click', () => game('p'))
        //when you click scissors
    scissors_div.addEventListener('click', () => game('s'))
}

// function game(userChoice) {
//     let computerChoice = numGenerate();
//     switch (userChoice + computerChoice)
//     case
// }

function runGame() {
    mainClick()
    winnerDeclared();
};

$(runGame);