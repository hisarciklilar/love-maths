// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function(){
  let buttons = document.getElementsByTagName("button");
  // the following is a modern version of writing 
  // for (let i=0; i<buttons.length; i++)
  for (let button of buttons){
    button.addEventListener("click", function(){
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        } // close of if-else statement
    }) // close of button event listener
  } // close of loop across buttons
}) // close of content load event listener

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
