const rockHand = document.querySelector(".fa-hand-rock");
const paperHand = document.querySelector(".fa-hand-paper");
const scissorHand = document.querySelector(".fa-hand-scissors");
rockHand.addEventListener("click", numberRanomizer);
paperHand.addEventListener("click", numberRanomizer);
scissorHand.addEventListener("click", numberRanomizer);


const result = document.querySelector(".result")
const scorePlus = document.querySelector(".plus-score");
const scoreMinus = document.querySelector(".minus-score");

gameScore = [
    {

    }
]

gameScore.plusScore = 0;
gameScore.minusScore = 0;

async function numberRanomizer(event) {
    
    let sup = Math.floor(Math.random() * 3) + 1;
    let numberClicked = parseInt(event.target.dataset.product)

    let choise;
    switch(sup) {
        case 1: 
            choise = "ROCK";
            break;
        case 2:

            choise = "PAPER";
            break;
        case 3:

            choise = "SCISSORS"
            break;
    }
    let computerChoice = choise.fontcolor("red");
    
    let yourNumber;
    switch(numberClicked) {
        case 1: 
        yourNumber = "ROCK";
            break;
        case 2:
            yourNumber = "PAPER";
            break;
        case 3:
            yourNumber = "SCISSORS"
            break;
    }
    let yourPick = yourNumber.fontcolor("green");


    let victoryText = "YOU WIN!";
    let victory = victoryText.fontcolor("gold");
    let loseText = "YOU LOSE!";
    let lose = loseText.fontcolor("red");
    let tieText = "ITS A TIE!";
    let tie = tieText.fontcolor("pink")


    if (sup === numberClicked) {
        result.innerHTML = `<div>You picked ${yourPick} the computer also picked ${computerChoice}! ${tie}</div>`
    }
    else if(sup === 1 && numberClicked === 2) {
        result.innerHTML = `<div>You picked ${yourPick} the computer picked ${computerChoice}, paper covers rock, ${victory}</div>`
        gameScore.plusScore = parseInt(gameScore.plusScore) + 1;
        scorePlus.innerHTML = `Wins: ${gameScore.plusScore}`
    }
    else if(sup === 1 && numberClicked === 3) {
        result.innerHTML = `<div>You picked ${yourPick} the computer picked ${computerChoice}, rock crushes scissors, ${lose}</div>`
        gameScore.minusScore = parseInt(gameScore.minusScore) + 1;
        scoreMinus.innerHTML = `Losses: ${gameScore.minusScore}`
    }
    else if(sup === 2 && numberClicked === 1) {
        result.innerHTML = `<div>You picked ${yourPick} the computer picked ${computerChoice}, paper covers rock, ${lose}</div>`
        gameScore.minusScore = parseInt(gameScore.minusScore) + 1;
        scoreMinus.innerHTML = `Losses: ${gameScore.minusScore}`
    }
    else if(sup === 2 && numberClicked === 3) {
        result.innerHTML = `<div>You picked ${yourPick} the computer picked ${computerChoice}, scissors cuts paper, ${victory}</div>`
        gameScore.plusScore = parseInt(gameScore.plusScore) + 1;
        scorePlus.innerHTML = `Wins: ${gameScore.plusScore}`
    }
    else if(sup === 3 && numberClicked === 1) {
        result.innerHTML = `<div>You picked ${yourPick} the computer picked ${computerChoice}, rock crushes scissors, ${victory}</div>`
        gameScore.plusScore = parseInt(gameScore.plusScore) + 1;
        scorePlus.innerHTML = `Wins: ${gameScore.plusScore}`
        handsRock.innerHTML = `<i class="fas fa-times"></i>`  
    }
    else if(sup === 3 && numberClicked === 2) {
        result.innerHTML = `<div>You picked ${yourPick} the computer picked ${computerChoice}, scissors cuts paper, ${lose}</div>`
        gameScore.minusScore = parseInt(gameScore.minusScore) + 1;
        scoreMinus.innerHTML = `Losses: ${gameScore.minusScore}`
    }
    
}


const clearResult = document.querySelector(".clear-result");
clearResult.addEventListener("click", clearResultFunction);

function clearResultFunction() {
    gameScore.plusScore = 0;
    scorePlus.innerHTML = `Wins: ${gameScore.plusScore}`
    gameScore.minusScore = 0;
    scoreMinus.innerHTML = `Losses: ${gameScore.minusScore}`

}