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

    // Display the first question
  displayQuestion();
});

// Function to end the quiz
function endQuiz() {
  clearInterval(timer);

  // Hide the questions and show the end screen
  document.getElementById('questions').classList.add('hide');
  document.getElementById('end-screen').classList.remove('hide');

  // Show the user's final score
  document.getElementById('final-score').textContent = userScore;

  // Add an event listener for the submit button to save the user's initials and score
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const initials = document.getElementById('initials').value;
    const score = userScore;

    // Create an object with the user's data
    const userData = {
      initials: initials,
      score: score
    };

    // Save the user's data to local storage and redirect to the high scores page
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push(userData);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'highscores.html';
  });
}

// Function to display a question
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  // Display the question title
  document.getElementById('question-title').textContent = question.question;

  // Display the answer choices as buttons
  const choicesElement = document.getElementById('choices');
  choicesElement.innerHTML = '';
  for (const answer of question.answers) {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', handleAnswerClick);
    choicesElement.appendChild(button);
  }
}

// Function to handle when the user clicks an answer choice
function handleAnswerClick(event) {
  const selectedAnswer = event.target.textContent;
  const question = questions[currentQuestionIndex];

  // Update the user's score and display feedback based on whether the answer is correct
  if (selectedAnswer === question.correctAnswer) {
    userScore++;
    showFeedback('Correct!', 'correct');
  } else {
    remainingTime -= 10;
    showFeedback('Wrong!', 'wrong');
  }

  // Move on to the next question or end the quiz if all questions have been answered
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function showFeedback(message, className) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback ${className}`;
    feedbackElement.classList.remove('hide');
    setTimeout(() => {
      feedbackElement.classList.add('hide');
    }, 1000);
  }
  
  document.getElementById('scores').addEventListener('click', function() {
    window.location.href = 'highscores.html';
  });

  const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  const initials = document.getElementById('initials').value;
  const score = userScore;

  // Create an object with the user's data
  const userData = {
    initials: initials,
    score: score
  };

  // Save the user's data to local storage and redirect to the high scores page
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.push(userData);
  highScores.sort((a, b) => b.score - a.score);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.href = 'highscores.html';
});