//Query Selectors
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector(".save-button");
var ideaCardSection = document.querySelector(".idea-cards")

//Event Listeners
titleInput.addEventListener("input", enableSaveButton)
bodyInput.addEventListener("input", enableSaveButton)
saveButton.addEventListener("mouseover", disableSaveButton, enableSaveButton)
saveButton.addEventListener("click", function(event){
  event.preventDefault(),
  saveIdea(),
  displayIdeas(),
  titleInput.value = "",
  bodyInput.value = ""
  });

// Event Handlers
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

function displayIdeas() {
  ideaCardSection.innerHTML = "";
  for (var i = 0; i < ideasArray.length; i++){
    ideaCardSection.innerHTML += 
    `<article class="new-idea-card" id="${ideasArray[i].title}">
       <div class="button-wrapper">
         <button class="favorite-button">(img)</button>
         <button class="delete-button">(img)</button>
       </div>
       <section class="text-container">
         <h2 class="card-title">${ideasArray[i].title}</h2>
         <p class="card-body">${ideasArray[i].body}</p>
       </section>
     </article>
    `
  }
}

function enableSaveButton(){
  if (titleInput.value !== "" && bodyInput.value !== "") {
     saveButton.classList.remove("disabled") 
      saveButton.disabled = false;
    }
}

function disableSaveButton(){
  if (titleInput.value.length === 0 && bodyInput.value.length === 0){
      saveButton.classList.add("disabled")
  }
}
