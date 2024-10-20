// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  // the following is a modern version of writing 
  // for (let i=0; i<buttons.length; i++)
  for (let button of buttons){
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            // alert(`You clicked ${gameType}`);
            runGame(gameType);
        } // close of if-else statement
    }); // close of button event listener
  } // close of loop across buttons

  // default game once page loads will be addition
  runGame("addition");

}); // close of content load event listener

// create a docstring
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed. 
 */
function runGame(gameType) {
  let num1 =Math.floor(Math.random() * 25) + 1;
  let num2 =Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    // below will make javascript to stop.
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
