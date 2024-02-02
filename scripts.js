document.addEventListener("DOMContentLoaded", function () {
    // Example: Add a button dynamically
    const addButton = document.createElement("button");
    addButton.textContent = "New Button";
    addButton.addEventListener("click", function () {
        alert("Button Clicked!");
    });

    document.getElementById("content").appendChild(addButton);
});
