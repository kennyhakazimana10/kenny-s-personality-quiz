// Personality Quiz - "What Type of Traveler Are You?"
// by Kenny-All Hakazimana
// Check the console and DOM for results

console.log("script.js connected!");

// store all question blocks
const questionBlocks = document.querySelectorAll(".question-block");
let selectedAnswers = [];

// add click event to every button
questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      // remove "selected" class from all buttons in this question
      buttons.forEach(b => b.classList.remove("selected"));

      // add "selected" class to clicked one
      this.classList.add("selected");

      // store the selected answer’s point value
      selectedAnswers[index] = parseInt(this.getAttribute("data-points"));
    });
  });
});

// handle result button click
const resultBtn = document.getElementById("result-btn");
const resultContainer = document.getElementById("result-container");

resultBtn.addEventListener("click", function() {
  // check if all questions are answered
  if (selectedAnswers.length < questionBlocks.length || selectedAnswers.includes(undefined)) {
    resultContainer.textContent = "Please answer all questions first!";
    resultContainer.style.color = "red";
    return;
  }

  // calculate total score
  let total = selectedAnswers.reduce((a, b) => a + b, 0);
  console.log("Total points:", total);

  // determine result
  let resultText = "";

  if (total <= 8) {
    resultText = "You are a Relaxed Traveler 🌴 — you love comfort, calm, and slow travel!";
  } else if (total <= 12) {
    resultText = "You are a Cultural Explorer 🏛️ — you enjoy history, museums, and food tours.";
  } else {
    resultText = "You are an Adventurer 🏔️ — hiking trails, new challenges, and wild trips are your style!";
  }

  // show result
  resultContainer.style.color = "black";
  resultContainer.textContent = resultText;
});
