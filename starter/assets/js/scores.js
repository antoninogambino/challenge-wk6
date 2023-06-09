// Retrieve highscores data from local storage and parse it
var highscoresData = JSON.parse(localStorage.getItem("highscores"));

// If there's no data in local storage, create an empty array
var highscoresArray = Array.isArray(highscoresData) ? highscoresData : [];

// If there are no highscores in the array, display a message indicating so
if (highscoresArray.length === 0) {
  var li = document.createElement("li");
  li.textContent = "No highscores yet!";
  document.getElementById("highscores").appendChild(li);
} else {
  // Sort the highscores array in descending order based on score
  highscoresArray.sort(function(a, b) {
    return b.score - a.score;
  });

  // Loop through the highscores array and display each highscore in a list item
  for (var i = 0; i < highscoresArray.length; i++) {
    var highscore = highscoresArray[i];
    var li = document.createElement("li");
    li.textContent = highscore.initials + " - " + highscore.score;
    document.getElementById("highscores").appendChild(li);
  }
}

// Add event listener to "Clear Highscores" button
document.getElementById("clear").addEventListener("click", function() {
  // Remove highscores from local storage
  localStorage.removeItem("highscores");

  // Clear list displayed on page
  var highscoresList = document.getElementById("highscores");
  while (highscoresList.firstChild) {
    highscoresList.removeChild(highscoresList.firstChild);
  }

  // Display message indicating that highscores have been cleared
  var li = document.createElement("li");
  li.textContent = "Highscores cleared!";
  highscoresList.appendChild(li);
});
