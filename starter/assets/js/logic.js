// Initialize variables for the quiz
let currentQuestionIndex = 0;
let userScore = 0;
let remainingTime = 60;
let timer;

// Add an event listener for the start button
document.getElementById('start').addEventListener('click', function() {
    // Hide the start screen and show the questions
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');

    // Set up the timer to decrement remaining time every second
  const timeElement = document.getElementById('time');
  timer = setInterval(() => {
    remainingTime--;
    timeElement.textContent = remainingTime;

    // End the quiz if time runs out or all questions have been answered
    if (remainingTime <= 0 || currentQuestionIndex >= questions.length) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);