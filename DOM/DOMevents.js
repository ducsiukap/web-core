let userNumber, computerNumber;
let userScore=0, computerScore=0;
function randInt(max) { return Math.round(Math.random()*max); }

function setUserNumber(usrNum) {
    userNumber = usrNum;
}

function editScoreBoard() {
    let scoreBoardColor = userScore > computerScore ? 'green' : userScore < computerScore ? 'red' : 'black';
    let scoreBoard = document.querySelector('#scoreBoard');
    scoreBoard.innerText = `your score: ${userScore} | computer score: ${computerScore}`
    scoreBoard.style.color = scoreBoardColor;
}

const btnCheck = document.querySelector('#btnCheck');
btnCheck.addEventListener('click', () => {
    computerNumber = randInt(10);
    // computerNumber = userNumber;
    if (confirm("Already to check ?")) {
        if (computerNumber === userNumber) {
            alert(`Computer win! Both are choose ${userNumber}`)
            ++computerScore;
        } else { 
            alert(`Your win! Your number: ${userNumber}, computer number: ${computerNumber}`); 
            ++userScore;
        }
        
        editScoreBoard();
    } 
});

const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', ()=>{
    if (confirm('Do you want to reset ?')) {
        userScore = computerScore = 0;
        editScoreBoard();
    }
})