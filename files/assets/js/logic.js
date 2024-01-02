// A start button that when clicked a timer starts and the first question appears.
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score
// Mock-Up

const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const questionContainerElement = document.getElementById("questions");
const questionElement = document.getElementById("question-title");
const answerBtnsElement = document.getElementById("choices");
let questionShuffle, currentQIndex;
let timerId;
let endElement = document.getElementById("end-screen");

//75 seconds to start
let time = 5;
const countdownEl = document.getElementById("time");
function updateCountdown() {
    time--;
    countdownEl.innerHTML = `${time}`;
    if (time === 0) {
        console.log("stop time");
        clearInterval(timerId);
        endPage();
    }
}

startButton.addEventListener("click", startQuiz);
function endPage() {
    endElement.classList.remove("hide");
    questionContainerElement.classList.add("hide");
}

function startQuiz() {
    console.log("Started quiz");
    // button.getElementById("start-btn").addEventListener("click");
    startScreen.classList.add("hide");
    questionShuffle = questions.sort(() => Math.random() - 0.5);
    currentQIndex = 0;
    questionContainerElement.classList.remove("hide");
    // updateCountdown();
    countdownEl.innerHTML = `${time}`;
    timerId = setInterval(updateCountdown, 1000);
    changeQuestion();
}

function changeQuestion() {
    resetState();
    showQuestion(questionShuffle[currentQIndex]);
}

function answerIsCorrect() {
    console.log("this is correct");
}
function answerIsWrong() {
    console.log("incorrect");
}

function showQuestion(question) {
    console.log(question);
    questionElement.innerText = question.question;
    question.options.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            answerIsCorrect();
        } else {
            answerIsWrong();
            time - 10;
        }
        button.addEventListener("click", chooseAnswer);
        answerBtnsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    while (answerBtnsElement.firstChild) {
        answerBtnsElement.removeChild(answerBtnsElement.firstChild);
    }
}
//resets available q options

function chooseAnswer(e) {
    const chosenAnswer = e.target;
    if (questionShuffle.length > currentQIndex + 1) {
        endPage();
    }
    const correct = chosenAnswer.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerBtnsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
        alert("Correct!");
    } else {
        element.classList.add("wrong");
        alert("Wrong!");
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// if (questionShuffle.length>currentQIndex+1){
//     display.getElementById("end-screen");
//     ("questions").hide
// }
//click start button --> landing page goes away (use css, target classes in html)
//timer starts
//first question and options appear

//for each question:
//user clicks an answer
//their choice is compared to the correct answer as stored in the question's object
//if correct, tell them
//if incorrect, tell them and subtract time from their timer (adding for correct is a cool extra)
//optional: play sound for correct/incorrect
//either way, question goes away after a few seconds and the next question appears

//after final question
//timer stops
//question disappears
//form appears for user to enter initials
//display their score

//user submits form
//initials and score get stored in local storage
//user is taken to the high scores page
//high scores are listed, sorted highest-lowest
//user has option to take quiz again

// document.getElementById('final-score') = timeLeft

let questions = [
    {
        question: "In what borough are Putney, Balham and Southfields?",
        options: ["Camden", "Wandsworth", "Hackney", "Southwark"],
        answer: 1,
    },
    {
        question: "Which of these is not a Henry James novel?",
        options: [
            "The Bostonians",
            "The Portrait of a Lady",
            "Vanity Fair",
            "Washington Square",
        ],
        answer: 2,
    },
    {
        question: "Which of these great films is my favourite?",
        options: [
            "Career Girls",
            "Celine and Julie Go Boating",
            "Lilya 4-ever",
            "Short Cuts",
        ],
        answer: 0,
    },
    {
        question: "Which of these artists that I love have I not seen live?",
        options: ["Tori Amos", "Liz Phair", "Kero Kero Bonito", "PJ Harvey"],
        answer: 3,
    },
    {
        question: "Which is the best quiz show?",
        options: [
            "Only Connect",
            "The Chase",
            "University Challenge",
            "Who Wants to be a Millionaire?",
        ],
        answer: 0,
    },
];
