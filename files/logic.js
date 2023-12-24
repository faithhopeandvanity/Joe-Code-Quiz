// Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
// Mock-Up

//set of questions --> array of objects
//each needs:
//text
//set of answers
//which answer is correct

const startButton = document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

let questionShuffle, currentQIndex

startButton.addEventListener('click', startQuiz)

function startQuiz(){
    console.log('Started quiz')
    startButton.classList.add('hide')
    questionShuffle = questions.sort(()=> Math.random()-.5)
    currentQIndex = 0
    questionContainerElement.classList.remove('hide')
    changeQuestion()
}

function changeQuestion(){
  // function resetState()
  showQuestion(questionShuffle[currentQIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.array.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseAnswer)
    answerBtnsElement.appendChild(button)
  });
}

// function resetState(){
  
// }

function chooseAnswer(e){

}

{
  
  document.querySelector("question-title", question)("choices",options);
  const timer = function() {
    var minute = 3;
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + ":" + sec;
      sec--;
  
      if (sec == 00) {
        minute--;
        sec = 60;
  
        if (minute == 0) {
          minute = 3;
        }
      }
    }, 1000);
  }
  You have: <span id="timer">3:00</span>!
  //must add function for when timer ends
  //remove time when wrong answer
}

//landing page

//explanation of quiz
//start button

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
