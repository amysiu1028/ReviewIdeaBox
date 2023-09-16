//Query Selectors
var titleInput = document.querySelector("#titleInput");
var bodyInput = document.querySelector("#bodyInput");
var saveButton = document.querySelector(".save-button");
var ideaCardSection = document.querySelector(".idea-cards");
var buttonWrapper = document.querySelector(".button-wrapper");
//var deleteButton = currentClick.querySelector(".delete-button");
var showAllIdeasButton = document.querySelector(".show-all-ideas");
var showStarredIdeasButton = document.querySelector(".show-starred-ideas");
var favoriteIdeasSection = document.querySelector(".favorite-ideas-section");

//Event Listeners
ideaCardSection.addEventListener("click", function(event) {
  currentClick = event.target;
  currentClickContainer = event.target.closest(".stars");
  if (currentClick) {
    isOrange(currentClick)
  }
});

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
// deleteButton.addEventListener("click", function(event) {
//   currentClick = event.target.closest(".");
//   if (currentClick) {
//     deleteCard(currentClick)
//   }
// });

showStarredIdeasButton.addEventListener("click", displayFavoriteIdeas);
showAllIdeasButton.addEventListener("click", showAllIdeas);

// Event Handlers
var ideasArray = [];
var newestIdea = {};
var starredIdeas = [];
var currentClick;
var currentClickContainer;

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

function saveButtonToggle() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.classList.remove("disabled");
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
    saveButton.classList.add("disabled");
  }
}

// function deleteCard() {

//   for (var i = 0; i < ideasArray.length; i++) {
//     if (ideasArray[i].title === currentClick.id) {
//       ideasArray.splice(i, 1);
//     }
//   }
//   displayIdeas();
// }

// function favorited() {

//   // var userFavoritedButton = currentClick.querySelector(".favorite-button");
//   // var userFavoritedButtonOr = currentClick.querySelector(".favorite-button-or");
//         // console.log(userFavoritedButton, "favoritebutton")
//         // console.log(userFavoritedButtonOr, "orangefav")
//         if (currentClick.getElementBy.contains("reactive")) {
//           currentClick.childElement.toggle("hidden");
//           isOrange();
//         }
// }
       
function isOrange() {
  console.log(currentClick, "<this is currentclick")
  console.log(currentClick.id, "<this is currentclick.id")
  var userFavoritedButtonOr = currentClickContainer.querySelectorAll(".reactive");
  var starsArray = Array.from(userFavoritedButtonOr);
  for (var i = 0; i < ideasArray.length; i++) {
    if (ideasArray[i].title === currentClick.id) {
      console.log(userFavoritedButtonOr, "<this is current.id");
      if (ideasArray[i].isOrange === false) {
        for (var k = 0; k < starsArray.length; k++) {
          starsArray[k].classList.toggle("hidden");
        }
      ideasArray[i].isOrange = true;
      starredIdeas.push(ideasArray[i]);
      // console.log(ideasArray[i].isOrange, starredIdeas, "I for loop");
      } else {
      // console.log(ideasArray[i].isOrange, starredIdeas, "j for loop");
      for (var k = 0; k < starsArray.length; k++) {
        starsArray[k].classList.toggle("hidden");
          }
      ideasArray[i].isOrange = false;
      for (var j = 0; j < starredIdeas.length; j++) {
        // console.log(starredIdeas)
        if (starredIdeas[j].id === ideasArray[i].id) {
          starredIdeas.splice(j, 1);
        }
      }
      return starredIdeas;
      }
    }
  }
}

function displayFavoriteIdeas() {
  showStarredIdeasButton.classList.add("hidden");
  showAllIdeasButton.classList.remove("hidden");
  favoriteIdeasSection.classList.remove("hidden");
  ideaCardSection.classList.add("hidden");
  favoriteIdeasSection.innerHTML = "";
  for (var i = 0; i < starredIdeas.length; i++){
    favoriteIdeasSection.innerHTML +=
    `<article class="favorite-ideas-card starred-view-card" id=${starredIdeas[i].body}>
      <div class="button-wrapper">
        <div class="stars" id="${ideasArray[i].body}">
          <button class="favorite-button-or"></button>
          <button class="delete-button"></button>
        </div>
        <button class="delete-button" id="${ideasArray[i].title}"></button>
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