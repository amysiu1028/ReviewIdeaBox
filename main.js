//Query Selectors
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector(".save-button");
var ideaHeader = document.querySelector("h2");
var ideaBody = document.querySelector("p");
//Event Listeners
saveButton.addEventListener("click",function(event){
    event.preventDefault(),
    saveIdea(), 
    displayIdeas()});

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
    ideaHeader.innerHTML = titleInput.value;
    ideaBody.innerHTML = bodyInput.value;
    // for (var i = 0; i < ideasArray.length; i++) {
    //   if
    // }
}









