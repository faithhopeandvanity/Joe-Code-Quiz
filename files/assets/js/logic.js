// A start button that when clicked a timer starts and the first question appears.
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score
// Mock-Up
var score = 0;
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("questions");
const questionElement = document.getElementById("question");
const answerBtnsElement = document.getElementById("choices")
let questionShuffle, currentQIndex;

const startingMins = 1.25
//75 seconds to start
let time = (startingMins*60)
const countdownEl = document.getElementById('time');
function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds<10 ; '0'+seconds ; seconds;
    countdownEl.innerHTML=`${minutes}: ${seconds}`;
    time--
}

startButton.onclick = ()=>(
    "wrapper".classList.remove("start-screen"))
    startQuiz


function startQuiz() {
    console.log("Started quiz");
    button.getElementById("start-btn").addEventListener("click");
    startButton.classList.add("hide");
    questionShuffle = questions.sort(() => Math.random() - 0.5);
    currentQIndex = 0;
    questionContainerElement.classList.remove("hide");
    changeQuestion();
}

function changeQuestion() {
    resetState()
    showQuestion(questionShuffle[currentQIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.array.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            score++
        }
        button.getElementsByClassName("btn").addEventListener("click", chooseAnswer);
        answerBtnsElement.appendChild(button);
    });
}

// function resetState(){
//     clearStatusClass(document.body)
// while (answerBtnsElement.firstChild){
//     answerBtnsElement.removeChild
//     (answerBtnsElement.firstChild)
// }
// }
// //resets available q options

// function chooseAnswer(e) {
//     const chosenAnswer  = e.target
//     const correct = chosenAnswer.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerBtnsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
// }

// function setStatusClass(element, correct){
//     clearStatusClass(element)
//     if (correct){
//         element.classList.add('correct')
//         alert("Correct!")
//     } else {
//         element.classList.add('wrong')
//         alert("Wrong!")
//     }
// }
// function clearStatusClass(element){
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// // if (questionShuffle.length>currentQIndex+1){
// //     display.getElementById("end-screen");
// //     ("questions").hide
// // }

//     // You have: <span id="timer">3:00</span>;
//     //must add function for when timer ends
//     //remove time when wrong answer



// //click start button --> landing page goes away (use css, target classes in html)
// //timer starts
// //first question and options appear

// //for each question:
// //user clicks an answer
// //their choice is compared to the correct answer as stored in the question's object
// //if correct, tell them
// //if incorrect, tell them and subtract time from their timer (adding for correct is a cool extra)
// //optional: play sound for correct/incorrect
// //either way, question goes away after a few seconds and the next question appears

// //after final question
// //timer stops
// //question disappears
// //form appears for user to enter initials
// //display their score

// //user submits form
// //initials and score get stored in local storage
// //user is taken to the high scores page
// //high scores are listed, sorted highest-lowest
// //user has option to take quiz again

// getElementById('final-score') = score
