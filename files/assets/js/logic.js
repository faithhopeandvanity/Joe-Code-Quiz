// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score

const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const questionContainerElement = document.getElementById("questions");
const questionElement = document.getElementById("question-title");
const answerBtnsElement = document.getElementById("choices");
let questionShuffle, currentQIndex;
let timerId;
let endElement = document.getElementById("end-screen");

let time = 90;
const countdownEl = document.getElementById("time");
//countdown function
function updateCountdown() {
    time--;
    countdownEl.innerHTML = `${time}`;
    if (time === 0) {
        console.log("stop time");
        clearInterval(timerId);
        endPage();
    }
}
//start quiz when button is clicked
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
        for (let i = 0; i < question.options.length; i++) {
            for (let i = 0; i < questions.length; i++) {
                const element = questions[i].answer;
                console.log("looped through array", element);
                if (question.options[i] === questions[i].answer) {
                    console.log("checked answers");
                }
            }
            const element = question.options[i];
            console.log(element);
            if (question.options[i] === answer) answerIsCorrect();
        }

        // if (answer.answer) {
        //     button.dataset.answer = answer.answer;
        //     answerIsCorrect();
        // } else {
        //     answerIsWrong();
        //     time - 10;
        // }
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

    console.log("-------------->", questionShuffle.length, currentQIndex);
    // if (questionShuffle.length > currentQIndex + 1) {
    //     endPage();
    // }
    const correct = chosenAnswer.dataset.correct;
    console.log(correct);
    console.log(chosenAnswer);
    console.log(
        questions[currentQIndex].options[questions[currentQIndex].answer]
    );
    if (
        e.target.innerText ==
        questions[currentQIndex].options[questions[currentQIndex].answer]
    ) {
        console.log("correct");
        //     setStatusClass(document.body, correct);
        // Array.from(answerBtnsElement.children).forEach((button) => {
        //     setStatusClass(button, button.dataset.correct);
        // });
    }
    // questions.splice(-1);
    // console.log(questions);
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    // if (correct) {
    //     element.classList.add("correct");
    //     alert("Correct!");
    // } else {
    //     element.classList.add("wrong");
    //     alert("Wrong!");
    // }
}
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// if (questionShuffle.length>currentQIndex+1){
//     display.getElementById("end-screen");
//     ("questions").hide
// }

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
        options: ["a: Camden", "b: Wandsworth", "c: Hackney", "d: Southwark"],
        answer: "d: Wandsworth",
    },
    {
        question: "Which of these is not a Henry James novel?",
        options: [
            "a: The Bostonians",
            "b: The Portrait of a Lady",
            "c: Vanity Fair",
            "d: Washington Square",
        ],
        answer: "c: Vanity Fair",
    },
    {
        question: "Which of these great films is my favourite?",
        options: [
            "a: Career Girls",
            "b: Celine and Julie Go Boating",
            "c: Lilya 4-ever",
            "d: Short Cuts",
        ],
        answer: "a: Career Girls",
    },
    {
        question: "Which of these artists that I love have I not seen live?",
        options: [
            "a: Tori Amos",
            "b: Liz Phair",
            "c: Kero Kero Bonito",
            "d: PJ Harvey",
        ],
        answer: "d: PJ Harvey",
    },
    {
        question: "Which is the best quiz show?",
        options: [
            "a: Only Connect",
            "b: The Chase",
            "c: University Challenge",
            "d: Who Wants to be a Millionaire?",
        ],
        answer: "a: Only Connect",
    },
];
