//Query Selectors
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector(".save-button");
var ideaHeader = document.querySelector("h2");
var ideaBody = document.querySelector("p");
var parentElement = document.getElementById("parent-element");

//Event Listeners
saveButton.addEventListener("click",function(event){
  event.preventDefault(),
  saveIdea(),
  displayIdeas(),
  titleInput.value = "",
  bodyInput.value = ""
  });
  window.addEventListener("load", disableSaveButton);

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
// function displayIdeas() {
//     ideaHeader.innerHTML = titleInput.value;
//     ideaBody.innerHTML = bodyInput.value;
// }

function displayIdeas() {
  var ideaCardsParentElement = document.getElementById("idea-cards");
  var newIdeaArticle = document.createElement('article');
  newIdeaArticle.classList.add('article');
  ideaCardsParentElement.appendChild(newIdeaArticle);
  var newIdeaHeading = document.createElement('h2');
  var newIdeaParagraph = document.createElement('p');
  newIdeaHeading.textContent = newestIdea.title;
  newIdeaParagraph.textContent = newestIdea.body;
  newIdeaArticle.appendChild(newIdeaHeading);
  newIdeaArticle.appendChild(newIdeaParagraph);
}

function disableSaveButton(){
// write in saveButton.disabled = false later to enable the saveButton again
  if (titleInput.value = "" ||bodyInput.value = "") {
    saveButton.disabled = true;
    saveButton.style.backgroundColor = "#EAEAF4";
  // add or remove classlist to change cursor icon
  }
}

