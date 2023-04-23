# Module 6 Challenge Web APIs: Code Quiz

## User Story

This is a simple quiz application that allows the user to answer a set of questions and get a score at the end. The application has the following requirements:

## Acceptance Criteria

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  * 
  * When answer is clicked, the next question appears
  * 
  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability to save their initials and their score
  
## Implementation

The application starts with a start button on the home screen. When the user clicks the start button, the timer starts and the first question appears. The user has to answer the question by clicking one of the answer buttons. If the answer is correct, the user's score increases, and if the answer is incorrect, time is subtracted from the clock. The next question appears after the user answers the current question. The quiz ends when all questions are answered or the timer reaches 0. At the end of the quiz, the user's score is displayed along with the ability to save their initials and score.

The app.js file contains the logic for the quiz. The questions array contains the list of questions for the quiz. The displayQuestion function displays the current question, and the handleAnswerClick function handles the user's answer. The endQuiz function is called when the quiz ends and saves the user's score and initials to local storage.

## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria.

### Deployment:

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
