//Query Selectors
var titleInput = document.querySelector("#titleInput");
var bodyInput = document.querySelector("#bodyInput");
var saveButton = document.querySelector(".save-button");
var ideaCardSection = document.querySelector(".idea-cards")
var buttonWrapper = document.querySelector(".button-wrapper");
var favoriteButtonWhite = document.querySelector(".favorite-button-white");
var favoriteButton = document.querySelector(".favorite-button");
var deleteButton = document.querySelector(".delete-button");
var showAllIdeasButton = document.querySelector(".show-all-ideas");
var showStarredIdeasButton = document.querySelector(".show-starred-ideas");
var favoriteIdeasSection = document.querySelector(".favorite-ideas-section");

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
// ideaCardSection.addEventListener("click", function(event) {
//     deleteCard(event);
  // });
showStarredIdeasButton.addEventListener("click", displayFavoriteIdeas); 
showAllIdeasButton.addEventListener("click", showAllIdeas);

// Event Handlers

var ideasArray = [];
var newestIdea = {};
var starredIdeas = [];
var userFavoritedButton;

function saveIdea() {
    newestIdea = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now(),
        isOrange: false
    }
    ideasArray.push(newestIdea);
    return ideasArray;
}

function displayIdeas() {
  ideaCardSection.innerHTML = "";
  for (var i = 0; i < ideasArray.length; i++){
    ideaCardSection.innerHTML +=
    `<article class="new-idea-card">
      <div class="button-wrapper">
          <button class="favorite-button">
            <img class="favorite-button-white" id="${ideasArray[i].body}" src=assets/star.svg>
          </button>
          <button class="delete-button" id="${ideasArray[i].title}" ><img class="delete-button-active" src=assets/delete.svg></button>
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

// function deleteCard(event) {
//   for (var i = 0; i < ideasArray.length; i++) {
//     if (ideasArray[i].title === event.target.id) {
//       ideasArray.splice(i, 1);
//     }
//   } 
//   displayIdeas();
// }

function favorited(event) {
  // console.log(event.target.id, "within favorited func")
  if (event.target.classList.contains("favorite-button")) {
    userFavoritedButton = event.target.querySelector(".favorite-button-white");
    if (userFavoritedButton.src.endsWith("star.svg")) {
      userFavoritedButton.src = "assets/star-active.svg";
     } else if (userFavoritedButton.src.endsWith("star-active.svg")) {
       userFavoritedButton.src = "assets/star.svg";
     }
   }
   isOrange(event);
   event.preventDefault();
 };
 
function isOrange(event) {
  console.log(event.target, event.target.id, "Id of event.target")
  for (var i = 0; i < ideasArray.length; i++) {
    console.log(ideasArray[i].body, "id of current object")
    if (ideasArray[i].body === event.target.id && ideasArray[i].isOrange === false) {
        ideasArray[i].isOrange = true; 
        starredIdeas.push(ideasArray[i]);
        console.log(starredIdeas)
      } else {
        ideasArray[i].isOrange = false;
      }
      event.preventDefault();
      return starredIdeas;
  }
  }


function displayFavoriteIdeas() {
  showStarredIdeasButton.classList.add("hidden");
  showAllIdeasButton.classList.remove("hidden");
  favoriteIdeasSection.classList.remove("hidden");
  ideaCardSection.classList.add("hidden");
  favoriteIdeasSection.innerHTML = "";
  for (var i = 0; i < showStarredIdeasButton.length; i++){
    favoriteIdeasSection.innerHTML +=   
    `<article class="favorite-ideas-card" id=${starredIdeas[i].title}>
    <div class="button-wrapper">
        <button class="favorite-button"><img class="favorite-button-active" src=assets/star.svg></button>
        <button class="delete-button"><img class="delete-button-active" src=assets/delete.svg></button>
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
  showStarredIdeasButton.classList.remove("hidden");
  showAllIdeasButton.classList.add("hidden");
  favoriteIdeasSection.classList.add("hidden");
  ideaCardSection.classList.remove("hidden");
}