// Initialize variables for the quiz
let currentQuestionIndex = 0;
let userScore = 0;
let remainingTime = 60;
let timer;

// Add an event listener for the start button
document.getElementById('start').addEventListener('click', function()