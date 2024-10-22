// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  // the following is a modern version of writing 
  // for (let i=0; i<buttons.length; i++)
  for (let button of buttons){
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            // alert("You clicked submit!");
            checkAnswer();
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
  } else if (gameType ==="multiply") {
    displayMultiplyQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    // below will make javascript to stop.
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
  // we need user's guess and the correct answer
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer =calculatedCorrectAnswer();
  let isCorrect = (userAnswer === calculatedAnswer[0]);

  if (isCorrect) {
    alert("Hey! You got it right! :D"); 
    incrementScore();
  } else {
    alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
    incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the dom, and returns the correct answer.
 */
function calculatedCorrectAnswer() {
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else {
    alert(`unimplemented operator ${operator}`);
    throw `unimplemented operator ${operator}. Aborting.`;
  }
}

/**
 * Gets the correct score from the DOM and increments it by 1
 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore; 
}

/**
 * Gets the correct tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore; 
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}
