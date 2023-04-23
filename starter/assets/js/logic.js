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