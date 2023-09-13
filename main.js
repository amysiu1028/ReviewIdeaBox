//Query Selectors
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector(".save-button");

//Event Listeners
saveButton.addEventListener("click", function(event){
  event.preventDefault(),
  saveIdea(),
  displayIdeas(),
  titleInput.value = "",
  bodyInput.value = ""
  });
// window.addEventListener("load", disableSaveButton);

var ideasArray = [];
var newestIdea = {}

function saveIdea(){
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
    var ideaCardsParentElement = document.getElementById("idea-cards");
    var newIdeaArticle = document.createElement('article');
    newIdeaArticle.classList.add('article');
    ideaCardsParentElement.appendChild(newIdeaArticle);
    var newButtonWrapper = document.createElement('div');
    newButtonWrapper.classList.add('button-wrapper');
    var newTextContainer = document.createElement('div');
    newTextContainer.classList.add('text-container');
    newIdeaArticle.appendChild(newTextContainer);
    newIdeaArticle.appendChild(newButtonWrapper);
    var newFavButton = document.createElement('button');
    newFavButton.classList.add('favorite-button');
    newDelButton.classList.add('delete-button');
    var newDelButton = document.createElement('button');
    var newIdeaHeading = document.createElement('h2');
    var newIdeaParagraph = document.createElement('p');
    newIdeaHeading.textContent = newestIdea.title;
    newIdeaParagraph.textContent = newestIdea.body;
    newTextContainer.appendChild(newIdeaHeading);
    newTextContainer.appendChild(newIdeaParagraph);
    newButtonWrapper.appendChild(newDelButton);
    newButtonWrapper.appendChild(newFavButton);
  }

// function disableSaveButton(){
// // write in saveButton.disabled = false later to enable the saveButton again
//   if (titleInput.value = "" ||bodyInput.value = "") {
//     saveButton.disabled = true;
//     saveButton.style.backgroundColor = "#EAEAF4";
//   // add or remove classlist to change cursor icon
//   }
// }

