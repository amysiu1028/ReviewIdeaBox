//Query Selectors
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector(".save-button");
var firstIdea = document.querySelector(".first-idea");
var firstIdeaParagraph = document.querySelector(".first-idea-paragraph");
//Event Listeners
saveButton.addEventListener("click", saveIdea, displayIdeas);
var ideasArray = [];
function saveIdea(event){
    var ideaObject = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now()
    }
    ideasArray.push(ideaObject);
    event.preventDefault();
    return ideasArray;
}
//create a new function that iterates through the ideasArray and createElement to display on the page
    //if statement that prevents more than 3 displaying at once.
    //could also use a slice method to only display the first three.
function displayIdeas() {
    firstIdea.innerHTML = titleInput.value;
    firstIdeaParagraph.innerHTML = bodyInput.value;
    var newArticle = document.createElement('article');
    for (var i = 0; i < ideasArray.length; i++) {
    }
}







