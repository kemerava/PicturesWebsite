// when hover over image the icon is gonna appear to star the image or delete the image
console.log("here")
const picsContainer = document.querySelector("#pics-container");
const picsUrlInput = document.querySelector("#pics-input-1");
const picsNameInput = document.querySelector("#pics-input-2");
console.log(picsContainer)
console.log(picsUrlInput)
console.log(picsNameInput)

// Add a task
const createTask = (url, name) => {
    // Create task div
    const taskElement = document.createElement("div");
    taskElement.classList.add("pic"); // adding the class name


    // Create task description
    const img = document.createElement("img");
    img.src = url;
    img.alt = name;
    //descriptionElement.classList.add("description");
    //descriptionElement.innerText = description;
    taskElement.appendChild(img);

    /*// Create icon
    const iconElement = document.createElement("i");
    iconElement.classList.add("icon");
    iconElement.classList.add("check");

    iconElement.addEventListener("click", () => {
        taskElement.remove();
    });

    taskElement.appendChild(iconElement);*/
    picsContainer.appendChild(taskElement);
};

// Listen to keypress on input
getUrl = picsUrlInput.addEventListener("keypress", e => {
    if (e.keyCode !== 13) {
        return;
    }

    // you can also use e.target to get the element
    // that triggered this event.
    if (picsNameInput.value === ""){
    picsNameInput.focus();
    getName;
    }
    else{
        createTask(picsUrlInput.value, picsNameInput.value);
        picsUrlInput.value = "";
        picsNameInput.value = "";
    }



});

// Listen to keypress on input
getName = picsNameInput.addEventListener("keypress", e => {
    if (e.keyCode !== 13) {
        return;
    }

    if (picsUrlInput.value === ""){
        picsUrlInput.focus();
        getUrl;}
        // you can also use e.target to get the element
        // that triggered this event.
        else{
        createTask(picsUrlInput.value, picsNameInput.value);
        picsUrlInput.value = "";
        picsNameInput.value = "";
        picsUrlInput.focus();
    }
});
