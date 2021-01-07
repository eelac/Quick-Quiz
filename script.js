var currentQuestionIndex = 0;
var choicesEl = document.getElementById("choices");
var questionEl = document.getElementById("questions");
var time = 60;
var timerInterval;
var finalScore = document.getElementById("finalScore");

// Timer
var timer = document.getElementById("countdown");
function countdown() {
  time--;
  timer.textContent = time + " seconds";
  if (time === 0) {
    endGame();
  }
}

startBtn.onclick = startGame;
function startGame() {
  // Hide start button, show questions
  timerInterval = setInterval(countdown, 1000);
  startBtn.classList.add("hide");
  questionEl.classList.remove("hide");
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, index) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = index + 1 + ". " + choice;

    choiceNode.onclick = nextQuestion;

    choicesEl.appendChild(choiceNode);
  });
}

function nextQuestion() {
  // Penalize time
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    timer.textContent = time + " seconds";
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === 5) {
    endGame();
  } else {
    getQuestion();
  }
}

function endGame() {
  questionEl.classList.add("hide");
  var end = document.getElementById("end");
  end.classList.remove("hide");
  timer.classList.add("hide");
  clearInterval(timerInterval);
  finalScore.textContent = time;
}

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
