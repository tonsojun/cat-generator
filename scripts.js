console.log("running js file")

let pizzaCatButton = document.getElementById("pizza-cat-button");

pizzaCatButton.addEventListener("click", pizzaButtonClicked);

function pizzaButtonClicked() {
    console.log("Hey you clicked the pizza button")

    let pizzaCatImage = document.createElement("img");
    pizzaCatImage.src = "pizza-cat.webp";

    document.body.appendChild(pizzaCatImage);
}

let vibeCatButton = document.getElementById("vibe-cat-button");

vibeCatButton.addEventListener("click", vibeButtonClicked);

function vibeButtonClicked() {
    console.log ("Hey you clicked the vibe button");

    let vibeCatImage = document.createElement("img");
    vibeCatImage.src = "vibing-cat.gif";

    document.body.appendChild(vibeCatImage);
}