//Query Selectors
var titleInput = document.querySelector("#titleInput");  // Selects an input element with the ID "titleInput"
var bodyInput = document.querySelector("#bodyInput");    // Selects an input element with the ID "bodyInput"
var saveButton = document.querySelector(".save-button"); // Selects a button element with the class "save-button"
var ideaCardSection = document.querySelector(".idea-cards"); // Selects a section with the class "idea-cards"
var buttonWrapper = document.querySelector(".button-wrapper"); // Selects an element with the class "button-wrapper"
var showAllIdeasButton = document.querySelector(".show-all-ideas"); // Selects a button element with the class "show-all-ideas"
var showStarredIdeasButton = document.querySelector(".show-starred-ideas"); // Selects a button element with the class "show-starred-ideas"
var favoriteIdeasSection = document.querySelector(".favorite-ideas-section"); // Selects a section with the class "favorite-ideas-section"

// Event Listeners
ideaCardSection.addEventListener("click", function(event) {
  currentClick = event.target; // Stores the clicked element in the variable currentClick
  currentClickContainer = event.target.closest(".stars"); // Finds the closest ancestor of the clicked element with the class "stars"
  if (currentClick.classList.contains("reactive")) { // Checks if the clicked element has the class "reactive"
    favoriteCard(currentClick); // Calls the favoriteCard function if it has the class "reactive"
  } else {
    deleteCard(currentClick); // Calls the deleteCard function if it doesn't have the class "reactive"
  }
});

titleInput.addEventListener("input", saveButtonToggle); // Listens for input events on the title input field and calls the saveButtonToggle function
bodyInput.addEventListener("input", saveButtonToggle); // Listens for input events on the body input field and calls the saveButtonToggle function
window.addEventListener("load", saveButtonToggle); // Listens for the page to finish loading and calls the saveButtonToggle function
saveButton.addEventListener("click", function(event){
  event.preventDefault(); // Prevents the default form submission behavior
  saveIdea(); // Calls the saveIdea function
  displayIdeas(); // Calls the displayIdeas function
  titleInput.value = ""; // Clears the title input field
  bodyInput.value = ""; // Clears the body input field
  saveButtonToggle(); // Calls the saveButtonToggle function
});

showStarredIdeasButton.addEventListener("click", displayFavoriteIdeas); // Listens for a click on the "Show Starred Ideas" button and calls the displayFavoriteIdeas function
showAllIdeasButton.addEventListener("click", showAllIdeas); // Listens for a click on the "Show All Ideas" button and calls the showAllIdeas function

// Event Handlers
var ideasArray = []; // An array to store idea objects
var newestIdea = {}; // An object to store the latest idea
var starredIdeas = []; // An array to store starred ideas
var currentClick; // Variable to store the currently clicked element
var currentClickContainer; // Variable to store the closest ancestor with class "stars"

// Function to save a new idea
function saveIdea() {
    newestIdea = {
        title: titleInput.value, // Stores the title input value in the new idea
        body: bodyInput.value,   // Stores the body input value in the new idea
        id: Date.now(),         // Generates a unique ID for the new idea based on the current timestamp
        isOrange: false         // Initializes a property called "isOrange" with the value false
    }
    ideasArray.push(newestIdea); // Pushes the new idea into the ideasArray
    return ideasArray;
}

// Function to display all ideas
function displayIdeas() {
  ideaCardSection.innerHTML = ""; // Clears the HTML content of the ideaCardSection
  for (var i = 0; i < ideasArray.length; i++){
    // Appends HTML for each idea to the ideaCardSection
    ideaCardSection.innerHTML +=
    `<article class="new-idea-card">
      <!-- ... HTML template for an idea card ... -->
    </article>
    `
  }
}

// Function to toggle the state of the save button
function saveButtonToggle() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.classList.remove("disabled"); // Removes the "disabled" class from the save button
    saveButton.disabled = false; // Enables the save button
  } else {
    saveButton.disabled = true; // Disables the save button
    saveButton.classList.add("disabled"); // Adds the "disabled" class to the save button
  }
}

// Function to delete a card
function deleteCard(currentClick) {
  // ... Implementation to delete an idea card ...
}

// Function to mark an idea as a favorite or remove the favorite status
function favoriteCard() {
  // ... Implementation to favorite/unfavorite an idea ...
}

// Function to display only the favorite ideas
function displayFavoriteIdeas() {
  // ... Implementation to display favorite ideas ...
}

// Function to display all ideas (including favorites)
function showAllIdeas() {
  // ... Implementation to show all ideas ...
}
