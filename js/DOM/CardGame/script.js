const cardSet = document.querySelector(".cardSet");
let dragged;
let counter = 0;

// Function to create new card and attach event listeners to it
function createCard() {
    counter++;

    // Create card HTML content
    const content = `
        <div class="cards | flex j-center i-center">
            <span class="card-num1">${counter}</span>
            <span class="card-icon">♠</span>
            <span class="card-num2">${counter}</span>
        </div>`;

    const newCard = document.createElement("div");
    newCard.className = "abs";
    newCard.innerHTML = content;
    newCard.setAttribute("draggable", "true");

    // Attach drag event listeners
    newCard.addEventListener("dragstart", dragStart);
    newCard.addEventListener("dragend", dragEnd);

    cardSet.appendChild(newCard);
}

// Drag start event handler
function dragStart(e) {
    dragged = e.target;
    e.target.classList.add("dragging");
    e.target.classList.add("dragged-card");
}

// Drag end event handler
function dragEnd(e) {
    e.target.classList.remove("dragging");
}

// Attach event listeners to drop zones
const targets = document.querySelectorAll(".drop-target");
targets.forEach((target) => {
    target.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necessary to allow dropping
    });

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("drop-zone")) {
            e.target.classList.add("dragged-card");
            e.target.appendChild(dragged);
        }
    });
});

// Initial card listener
document.querySelector(".abs").addEventListener("mousedown", createCard);
