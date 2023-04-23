# Module 6 Challenge Web APIs: Code Quiz

## User Story

This is a simple quiz application that allows the user to answer a set of questions and get a score at the end. The application has the following requirements:

## Acceptance Criteria

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  * When answer is clicked, the next question appears
  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability to save their initials and their score
  
## Implementation

The application starts with a start button on the home screen. When the user clicks the start button, the timer starts and the first question appears. The user has to answer the question by clicking one of the answer buttons. If the answer is correct, the user's score increases, and if the answer is incorrect, time is subtracted from the clock. The next question appears after the user answers the current question. The quiz ends when all questions are answered or the timer reaches 0. At the end of the quiz, the user's score is displayed along with the ability to save their initials and score.

The app.js file contains the logic for the quiz. The questions array contains the list of questions for the quiz. The displayQuestion function displays the current question, and the handleAnswerClick function handles the user's answer. The endQuiz function is called when the quiz ends and saves the user's score and initials to local storage.

### Deployment:

URL: https://github.com/antoninogambino/challenge-wk6.git

GitHub deployed repository: https://antoninogambino.github.io/challenge-wk6/

### Deployed application screenshot:

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
