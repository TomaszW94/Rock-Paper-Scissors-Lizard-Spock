//Selectors
const gameChoises = document.querySelector('.game-choises');
const gamegroupBtns = document.querySelectorAll('.game-group-btns button');
const gameResult = document.querySelector('.game-result');
const gameRules = document.querySelector('.rules');
const btnGameRules = document.querySelector('.game-rules-open_btn');
const btnCloseGameRules = document.querySelector('.game-rules-close_btn');
const whoWinp = document.querySelector('.who-win p');
const gameScore = document.querySelector('.game-score .game-summary');


let $score = 0;
let $selectPlayer = "";
let $aiSelect = "";


//Event listeners
gamegroupBtns.forEach(button => {
    button.addEventListener('click', startGame);
});
btnGameRules.addEventListener('click', function () {
    gameRules.classList.add('active');

});
btnCloseGameRules.addEventListener('click', function () {
    gameRules.classList.remove('active');

});


//Functions
function whatYouChoise() {
    $selectPlayer = event.target.dataset.choise;
    const playerChoiseBtn = document.createElement('button');
    document.querySelector('.player').appendChild(playerChoiseBtn);
    playerChoiseBtn.classList.add($selectPlayer);
    playerChoiseBtn.classList.add('circle-btn');
    playerChoiseBtn.style.transform = "translate(0)";
    playerChoiseBtn.dataset.choise = $selectPlayer;
}

function whatAiChoise() {
    const allAiChoises = [...document.querySelectorAll('.game-group-btns button')];
    $aiSelect = allAiChoises[Math.floor(Math.random() * 5)].dataset.choise;
    document.querySelector('.ai button').classList.add($aiSelect);
    document.querySelector('.ai button').dataset.choise = $aiSelect;
    document.querySelector('.ai button').classList.remove('shadow');
    const btnPlayAgain = document.createElement('button');
    document.querySelector('.who-win').appendChild(btnPlayAgain);
    btnPlayAgain.textContent = "play again";
    btnPlayAgain.addEventListener('click', playAgain);
    document.querySelector('.who-win p').textContent = whoWins($selectPlayer, $aiSelect);
    if (whoWinp.textContent === 'you win') {
        document.querySelector('.player button').classList.add('winner');
    } else if (whoWinp.textContent === 'you lose') {
        document.querySelector('.ai button').classList.add('winner');
    }
}

function waitforAi() {
    const createAiBtn = document.createElement('button');
    document.querySelector('.ai').appendChild(createAiBtn);
    createAiBtn.classList.add('circle-btn');
    document.querySelector('.ai button').classList.add('shadow');
    createAiBtn.style.transform = "translate(0)";
}

function whoWins(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if (player === "paper" && (ai === "rock" || ai === "spock")) {
        $score++;
        gameScore.textContent = $score;
        return 'you win';
    } else if (player === "rock" && (ai === "lizard" || ai === "scissors")) {
        $score++;
        gameScore.textContent = $score;
        return 'you win';
    } else if (player === "scissors" && (ai === "paper" || ai === "lizard")) {
        $score++;
        gameScore.textContent = $score;
        return 'you win';
    } else if (player === "lizard" && (ai === "spock" || ai === "paper")) {
        $score++;
        gameScore.textContent = $score;
        return 'you win';
    } else if (player === "lizard" && (ai === "spock" || ai === "paper")) {
        $score++;
        gameScore.textContent = $score;
        return 'you win';
    } else if (player === "spock" && (ai === "scissors" || ai === "rock")) {
        $score++;
        gameScore.textContent = $score;
        return 'you win';
    } else {
        $score--;
        gameScore.textContent = $score;
        return 'you lose';
    }
}


function playAgain() {
    gameResult.style.display = "none";
    gameChoises.style.display = "flex";
    document.querySelector('.player button').remove();
    document.querySelector('.ai button').remove();
    document.querySelector('.who-win button').remove();
    document.querySelector('.who-win p').textContent = "";
}


function startGame() {
    gameResult.style.display = "flex";
    gameChoises.style.display = "none";
    whoWinp.textContent = "";
    whatYouChoise();
    waitforAi();
    setTimeout(whatAiChoise, Math.floor(Math.random() * 8000));
}