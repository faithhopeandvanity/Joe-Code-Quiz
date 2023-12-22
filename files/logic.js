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
