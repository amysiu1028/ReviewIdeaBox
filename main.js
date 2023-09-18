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
  titleInput.value = ""; // Clears the title input field -- updating the value of the titleInput field in the user interface (UI) by setting its value to an empty string, effectively clearing the text input field.
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
      <div class="button-wrapper" id="${ideasArray[i].body}">
        <div class="stars" id="${ideasArray[i].body}">
          <button class="favorite-button reactive" id="${ideasArray[i].title}"></button>
          <button class="favorite-button-or hidden reactive" id="${ideasArray[i].title}"></button>
        </div>
          <button class="delete-button" id="${ideasArray[i].title}"></button>
      </div>
      <section class="text-container">
          <h2 class="card-title">${ideasArray[i].title}</h2>
          <p class="card-body">${ideasArray[i].body}</p>
      </section>
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
//DISABLED
//The disabled attribute is present in the <button> tag with the "Save" label. 
//When the disabled attribute is included on a button element, it starts in a 
//disabled state when the page loads, and the button cannot be clicked or interacted with 
//until JavaScript code modifies the disabled property to false, enabling the button as needed. 
//In your JavaScript code, the saveButtonToggle function is responsible for toggling the disabled 
//property based on the input values in the titleInput and bodyInput fields.

// Function to delete a card
function deleteCard(currentClick) {
  console.log(currentClick, "currentclick") 
//This line logs the currentClick variable to the console 
//along with the string "currentclick" for debugging purposes. 
  //It's used to display information about the element that was clicked.
  for (var i = 0; i < ideasArray.length; i++) {
    for (var j = 0; j < starredIdeas.length; j++) {
      if (starredIdeas[j].id === ideasArray[i].id) {
          starredIdeas.splice(j, 1);
      }
    }
    if (ideasArray[i].title === currentClick.id) {
      ideasArray.splice(i, 1);
    }
  }
  displayIdeas();
}
}
//The code then enters a nested loop:

// The outer loop (for (var i = 0; i < ideasArray.length; i++)) iterates through the ideasArray, which presumably contains objects representing ideas.

// The inner loop (for (var j = 0; j < starredIdeas.length; j++)) iterates through the starredIdeas array, which likely contains objects representing ideas that have been marked as "starred" or favorite ideas.

// Inside the inner loop, the code checks if an idea in starredIdeas (identified by its id) matches an idea in ideasArray (also identified by its id). If there's a match, it removes the idea from starredIdeas using the splice method. This effectively removes a "starred" or favorite status from an idea.

// After the inner loop, the code checks if an idea in ideasArray (identified by its title) matches the id of the currentClick element. If there's a match, it removes the idea from ideasArray using the splice method. This effectively deletes the idea from the list of all ideas.

// Finally, after both loops have finished, the displayIdeas function is called. This function appears to be responsible for updating the user interface to display the ideas that remain in the ideasArray. It essentially refreshes the displayed ideas to reflect the changes made by removing an idea.

// Function to mark an idea as a favorite or remove the favorite status
function favoriteCard() {
  console.log(currentClick, "<this is currentclick"); // Debugging: Logs the value of currentClick
  console.log(currentClick.id, "<this is currentclick.id"); // Debugging: Logs the id of currentClick
  var userFavoritedButtonOr = currentClickContainer.querySelectorAll(".reactive"); 
  // Selects elements with class "reactive" within currentClickContainer
  var starsArray = Array.from(userFavoritedButtonOr); 
  // Converts the NodeList to an array
  for (var i = 0; i < ideasArray.length; i++) {
    if (ideasArray[i].title === currentClick.id) { //
//The condition `if (ideasArray[i].title === currentClick.id)` is checking 
//whether the `title` property of an idea in the `ideasArray` matches the `id` 
//property of the `currentClick` element. Let's break it down:
      
// - `ideasArray[i].title`: This is accessing the `title` property of an idea 
      //object in the `ideasArray`. `ideasArray` appears to be an array that holds objects, 
      //each representing an idea. The `i` index is used to access a specific idea in the array.

// - `currentClick.id`: This is accessing the `id` property of the `currentClick` element. 
//The `currentClick` variable appears to be a reference to an HTML element that was clicked by 
      //the user. The `id` property of an HTML element typically contains a unique identifier.

// So, the condition is checking if the `title` of the idea in `ideasArray` matches the `id` 
      //of the element that was clicked (`currentClick`). If there's a match, it implies 
      //that the clicked element corresponds to a specific idea in the `ideasArray`.

// This condition is likely used to determine if the user clicked on an element related to a 
      //particular idea and is part of the logic for favoriting or unfavoriting that idea, d
      //epending on its current state.
      console.log(userFavoritedButtonOr, "<this is current.id"); // Debugging: Logs userFavoritedButtonOr
      if (ideasArray[i].isOrange === false) {
        for (var k = 0; k < starsArray.length; k++) {
          starsArray[k].classList.toggle("hidden"); // Toggles the "hidden" class on elements in starsArray
        }
        ideasArray[i].isOrange = true; // Marks the idea as "orange"
        starredIdeas.push(ideasArray[i]); // Adds the idea to the starredIdeas array
      } else {
        for (var k = 0; k < starsArray.length; k++) {
          starsArray[k].classList.toggle("hidden"); // Toggles the "hidden" class on elements in starsArray
        }
        ideasArray[i].isOrange = false; // Marks the idea as not "orange"
        for (var j = 0; j < starredIdeas.length; j++) {
          if (starredIdeas[j].id === ideasArray[i].id) {
            starredIdeas.splice(j, 1); // Removes the idea from the starredIdeas array
          }
        }
    //why not i?
    //Using `i` for all of the loop variables would lead to unintended consequences in this specific context because the loops are operating on different arrays and have distinct purposes. Here's why using `i` for all of them would be problematic:

// 1. **Nested Loops**: In the provided code, there are nested loops. The outer loop (`i`) is iterating through the `ideasArray`, and the inner loops (`j` and `k`) are used for different purposes within the same `if-else` block. Nested loops are often used when working with multiple data structures or when you need to perform different operations on different arrays simultaneously.

// 2. **Different Data Structures**: The loops are dealing with different arrays and elements. `i` is used to iterate through `ideasArray`, `j` is used for `starredIdeas`, and `k` is used for `starsArray`. Each of these arrays serves a different purpose and contains different types of data.

// 3. **Modifying Arrays**: In particular, the code includes operations that modify the length and content of arrays. For example, when an idea is removed from `starredIdeas`, the length of `starredIdeas` changes, and using the same loop variable `i` for both loops would cause unexpected behavior. By having separate loop variables, you can ensure that each loop works correctly with its respective array.

// Using separate loop variables for different loops operating on different data structures is a best practice in programming because it helps maintain clarity and avoid unintended side effects. It's a way to clearly define the scope and purpose of each loop, making the code more readable and maintainable.
        return starredIdeas; // Returns the updated starredIdeas array
      }
    }
  }
}

function displayFavoriteIdeas() {
  showStarredIdeasButton.classList.add("hidden"); // Hides the "Show Starred Ideas" button
  showAllIdeasButton.classList.remove("hidden"); // Shows the "Show All Ideas" button
  favoriteIdeasSection.classList.remove("hidden"); // Shows the favoriteIdeasSection
  ideaCardSection.classList.add("hidden"); // Hides the ideaCardSection
  favoriteIdeasSection.innerHTML = ""; // Clears the HTML content of favoriteIdeasSection
  for (var i = 0; i < starredIdeas.length; i++) {
    favoriteIdeasSection.innerHTML +=
    `<article class="favorite-ideas-card starred-view-card" id=${starredIdeas[i].body}>
      <div class="button-wrapper">
          <button class="favorite-button-or"></button>
          <button class="delete-button"></button>
      </div>
      <section class="text-container">
        <h2 class="card-title">${starredIdeas[i].title}</h2>
        <p class="card-body">${starredIdeas[i].body}</p>
      </section>
    </article>
    `
  }
}

function showAllIdeas() {
  showStarredIdeasButton.classList.remove("hidden"); // Shows the "Show Starred Ideas" button
  showAllIdeasButton.classList.add("hidden"); // Hides the "Show All Ideas" button
  favoriteIdeasSection.classList.add("hidden"); // Hides the favoriteIdeasSection
  ideaCardSection.classList.remove("hidden"); // Shows the ideaCardSection
}

