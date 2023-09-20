const gifButton = document.getElementById("gifButton");
const gifContainer = document.getElementById("gifContainer");

gifButton.addEventListener("mouseenter", () => {
    gifContainer.style.display = "block";
});

gifButton.addEventListener("mouseleave", () => {
    gifContainer.style.display = "none";
});