let seeHighScores = document.querySelector("#highscores");
//Clear button.
const clearButton = document.querySelector("#clear");

function updateUserScore() {
    let highScore = JSON.parse(localStorage.getItem("highscore")) || [];

    // List scores, smallest first.
    highScore.sort(function (a, b) {
        return a - b;
    });
    //Create li for each score recorded
    highScore.forEach((score) => {
        //Create list item for each score
        let listItems = document.createElement("li");
        listItems.textContent = score.userInitials + " : " + score.score;
        seeHighScores.appendChild(listItems);
    });
}

function clearScores() {
    window.localStorage.removeItem("highscore");
    //remove item
    window.location.reload();
}

clearButton.addEventListener("click", clearScores);
//call function
updateUserScore();
