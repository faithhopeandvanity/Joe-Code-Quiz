//Create global variables and target html elements

let startBtnEl = document.querySelector("#start");
let timerId = document.querySelector("#time");
let questionsId = document.querySelector("#questions");
let optionsId = document.querySelector("#options");
let playersInitials = document.querySelector("#initials");
let submitBtnEl = document.querySelector("#submit");
let playerFeedback = document.querySelector("#feedback");

//Set current question index to 0
let currentQuestion = 0;
//15 secs per question; 75 secs in total.
let timerCount = questions.length * 15;
let timeInterval;

// Start quiz
function startQuiz() {
    let startScreen = document.querySelector("#start-screen");
    startScreen.style.display = "none";
    questionsId.removeAttribute("class");
    showQuestion();
    //Update seconds count every 1000 milliseconds ie. 1 second
    timeInterval = setInterval(startTimer, 1000);
    startTimer();
}

// Display current question and answers
function showQuestion() {
    const questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = questions[currentQuestion].question;
    optionsId.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].answer.length; i++) {
        const button = document.createElement("button");
        button.textContent = questions[currentQuestion].answer[i];
        button.addEventListener("click", checkAnswer);
        optionsId.appendChild(button);
    }
}

// Audio elements
var soundIncorrect = new Audio("audio/incorrect.wav");
soundIncorrect.volume = 0.3;
var soundCorrect = new Audio("audio/correct.wav");
soundCorrect.volume = 0.3;

// Check if answer is correct
function checkAnswer(event) {
    event.preventDefault();
    const clickedAnswer = event.target.textContent;
    if (clickedAnswer === questions[currentQuestion].rightAnswer) {
        currentQuestion++;
        if (currentQuestion === questions.length) {
            endQuiz();
        } else {
            showQuestion();
            soundCorrect.play();
        }
        playerFeedback.textContent = "✅";
    } else {
        timerCount -= 10;
        soundIncorrect.play();
        playerFeedback.textContent = "❌";
    }

    playerFeedback.removeAttribute("class", "hide");
    setTimeout(function () {
        playerFeedback.setAttribute("class", "hide");
    }, 500);
}

// Timer
function startTimer() {
    timerId.textContent = timerCount;
    timerCount--;
    if (timerCount <= 0) {
        //End quiz when time runs out.
        endQuiz();
    }
}

// End quiz
function endQuiz() {
    clearInterval(timeInterval);
    const endScreen = document.querySelector("#end-screen");
    endScreen.removeAttribute("class");
    const finalScore = document.querySelector("#final-score");
    finalScore.textContent = timerCount;
    questionsId.setAttribute("class", "hide");
}

// Save score, prompt user for initials
function saveUserScore() {
    const initials = playersInitials.value.trim();

    if (initials !== "") {
        //Convert score to JSON.
        let existingScore = JSON.parse(localStorage.getItem("highscore")) || [];
        let newScore = {
            score: timerCount,
            playersInitials: initials,
        };
        existingScore.push(newScore);
        localStorage.setItem("highscore", JSON.stringify(existingScore));
        window.location.href = "highscores.html";
    }
}
//Call function
function pressEnter(event) {
    if (event.key === "Enter") {
        saveUserScore();
    }
}
//Event listeners
startBtnEl.addEventListener("click", startQuiz);
submitBtnEl.addEventListener("click", saveUserScore);
//We learned about 'keyup' and 'keydown' last week, so I wanted to implement it on a button.
playersInitials.addEventListener("keyup", pressEnter);
