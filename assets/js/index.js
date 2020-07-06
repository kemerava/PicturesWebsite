// when hover over image the icon is gonna appear to star the image or delete the image
const picsContainer = document.querySelector("#pics-container");
const picsUrlInput = document.querySelector("#pics-input-1");
const picsNameInput = document.querySelector("#pics-input-2");

// Add a task
const createTask = (url, name) => {
    // Create task div
    const taskElement = document.createElement("div");
    taskElement.classList.add("pic"); // adding the class name


    // Create task description
    const img = document.createElement("img");
    img.src = url;
    img.alt = name;
    const picName = document.createElement("p");
    picName.classList.add("overlay")
    picName.innerText = name;
    //descriptionElement.classList.add("description");
    //descriptionElement.innerText = description;
    taskElement.appendChild(img);
    taskElement.appendChild(picName);

    //Create icon
    const iconElementStar = document.createElement("i");
    iconElementStar.classList.add("star");
    iconElementStar.classList.add("icon");
    const iconElementDelete = document.createElement("i");
    iconElementDelete.classList.add("trash");
    iconElementDelete.classList.add("icon");


    iconElementDelete.addEventListener("click", () => {
        taskElement.remove();
    });
    iconElementStar.addEventListener("click", () => {
        if (iconElementStar.style.color === "rgb(255, 149, 0)"){
            iconElementStar.style.color = "rgba(0,0,0,.5)";
        }
        else{
            iconElementStar.style.color = "#FF9500"
        }
    });

    taskElement.appendChild(iconElementStar);
    taskElement.appendChild(iconElementDelete);
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
