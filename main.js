//Query Selectors

var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector(".save-button");
var ideaCardSection = document.querySelector(".idea-cards")
var favoriteButton = document.querySelectorAll(".favorite-button");
var deleteButton = document.querySelectorAll(".delete-button");
var buttonWrapper = document.querySelector(".button-wrapper");
// var activeStarImage = document.querySelector(".favorite-button-active")

//Event Listeners
ideaCardSection.addEventListener("click", favorited);
titleInput.addEventListener("input", saveButtonToggle);
bodyInput.addEventListener("input", saveButtonToggle);
saveButton.addEventListener("mouseover", saveButtonToggle);
saveButton.addEventListener("click", function(event){
  event.preventDefault(),
  saveIdea(),
  displayIdeas(),
  titleInput.value = "",
  bodyInput.value = "",
  saveButtonToggle()
  });

// Event Handlers

var ideasArray = [];
var newestIdea = {};
var coloredFavoriteButton = `<button class="favorite-button"><img class="favorite-button-active" src=assets/star-active.svg></button>`; 

function saveIdea() {
    newestIdea = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now()
    }
    ideasArray.push(newestIdea);
    return ideasArray;
}

//create a new function that iterates through the ideasArray and createElement to display on the page
    //if statement that prevents more than 3 displaying at once.
    //could also use a slice method to only display the first three.

function displayIdeas() {
  ideaCardSection.innerHTML = "";
  for (var i = 0; i < ideasArray.length; i++){
    ideaCardSection.innerHTML +=
    `<article class="new-idea-card" id=${ideasArray[i].title}>
      <div class="button-wrapper">
          <button class="favorite-button"><img class="favorite-button-active" src=assets/star.svg></button>
          <button class="delete-button"><img class="delete-button-active" src=assets/delete.svg></button>
      </div>
      <section class="text-container">
          <h2 class="card-title">${ideasArray[i].title}</h2>
          <p class="card-body">${ideasArray[i].body}</p>
      </section>
    </article>
    `
  }
};


function saveButtonToggle() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.classList.remove("disabled");
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
    saveButton.classList.add("disabled");
  }
};

function favorited(event) {
  if (event.target.classList.contains("favorite-button")) {
    var userFavoritedButton = event.target.querySelector(".favorite-button-active");
    if (userFavoritedButton.src.endsWith("star.svg")) {
      userFavoritedButton.src = "assets/star-active.svg";
    } else if (userFavoritedButton.src.endsWith("star-active.svg")) {
      userFavoritedButton.src = "assets/star.svg";
    }
  }
};

