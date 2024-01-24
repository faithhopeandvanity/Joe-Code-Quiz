var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-screen");
var questionEl = document.getElementById("question-container");
var answerButtonsEl = document.getElementById("choices");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScores = document.getElementById("high-scores-link");
var submitButton = document.getElementById("submit");
var clearScoreButton = document.getElementById("clearHSBtn");
//fix next line?
var initialsField = document.getElementById("players-name");
var restartButton = document.getElementById("backBtn");
var scoreField = document.getElementById("players-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];
var timerEl = document.getElementById("timer");
var timeLeft = 75;
var timerID;

var shuffledQuestions, currentQuestionIndex;

// Start quiz
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Countdown timer
function enableTimer() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}

// Start Quiz
function startQuiz() {
    timerID = setInterval(enableTimer, 1000);
    startContainerEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");

    // Timer starts when start button is clicked
    enableTimer();
    setNextQuestion();
}

// Move to next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Show questions
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach((answer) => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    });
}

// Reset state function
function resetState() {
    //clearStatusClass(document.body)
    nextButton.classList.add("hide");
    checkAnswerEl.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

// Select answer function
function selectAnswer(e) {
    var selectedButton = e.target;
    //console.dir(selectedButton);
    var correct = selectedButton.dataset.correct;
    checkAnswerEl.classList.remove("hide");
    // Check if the answer correct or wrong then show text
    if (correct) {
        checkAnswerEl.innerHTML = "Correct!";
    } else {
        checkAnswerEl.innerHTML = "Sorry, incorrect!";
        if (timeLeft <= 10) {
            timeLeft = 0;
        } else {
            // If the aswer is wrong, deduct time by 10
            timeLeft -= 10;
        }
    }

    Array.from(answerButtonsEl.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
        checkAnswerEl.classList.remove("hide");
    } else {
        startButton.classList.remove("hide");
        saveScore();
    }
}

// Show 'right' and 'wrong' colours
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

// Remove classes
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// Save high scores
function saveScore() {
    clearInterval(timerID);
    timerEl.textContent = "Time left: " + timeLeft;
    setTimeout(function () {
        //localStorage.setItem("scores", JSON.stringify(scores));
        questionContainerEl.classList.add("hide");
        document.getElementById("score-container").classList.remove("hide");
        document.getElementById("your-score").textContent =
            "Your final score is " + timeLeft;
    }, 2000);
}

var loadHighScores = function () {
    // Get score from local storage

    if (!savedScores) {
        return false;
    }

    // Use JSON to convert scores into array
    savedScores = JSON.parse(savedScores);
    var initials = document.querySelector("#initials-field").value;
    var newScore = {
        score: timeLeft,
        initials: initials,
    };
    //Push new score to established array
    savedScores.push(newScore);
    console.log(savedScores);

    savedScores.forEach((score) => {
        initialsField.innerText = score.initials;
        scoreField.innerText = score.score;
    });
};

// Show high scores
function showHighScores(initials) {
    document.getElementById("highscores").classList.remove("hide");
    document.getElementById("score-container").classList.add("hide");
    startContainerEl.classList.add("hide");
    questionContainerEl.classList.add("hide");
    if (typeof initials == "string") {
        var score = {
            initials,
            timeLeft,
        };
        scores.push(score);
    }

    var highScoreEl = document.getElementById("highscore");
    highScoreEl.innerHTML = "";
    //console.log(scores)
    for (i = 0; i < scores.length; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "name-div");
        div1.innerText = scores[i].initials;
        var div2 = document.createElement("div");
        div2.setAttribute("class", "score-div");
        div2.innerText = scores[i].timeLeft;

        highScoreEl.appendChild(div1);
        highScoreEl.appendChild(div2);
    }

    localStorage.setItem("scores", JSON.stringify(scores));
}

// View high scores link
viewHighScores.addEventListener("click", showHighScores);

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#initials-field").value;
    showHighScores(initials);
});

// Restart or reload the page
restartButton.addEventListener("click", function () {
    window.location.reload();
});

// Clear localStorage items
clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    document.getElementById("highscore").innerHTML = "";
});
