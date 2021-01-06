const startButton = document.getElementById('startBtn')
const questionContainerElement = document.getElementById('questionContainer')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Start');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}

function selectAnswer() {

}