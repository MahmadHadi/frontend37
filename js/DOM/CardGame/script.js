const cardSet = document.querySelector(".cardSet");
const overlay = document.querySelector(".overlay");

// ! used querySelectorAll
const allCards = document.querySelectorAll(".abs");
console.log(allCards);

allCards.forEach((elem, i) => {
    console.log(elem);
    elem.addEventListener("mousedown", createCard);
});

let counter = 0;

function createCard() {
    counter++;
    // alert("asdf ");
    console.log(allCards);
    const content = `<div class="cards | flex j-center i-center" style="position: absolute; z-index: ${counter}">
                            <span class="card-num1">${counter}</span>
                            <span class="card-icon">♠</span>
                            <span class="card-num2">${counter}</span>
                        </div>`;
    const newCard = document.createElement("div");

    newCard.className = "abs";
    newCard.innerHTML = content;
    newCard.setAttribute("onclick", "createCard()");

    // draggable="true" ondragstart="moveCard(e)">
    newCard.setAttribute("draggable", "true");
    newCard.setAttribute("ondrag", "moveCard(e)");

    cardSet.appendChild(newCard);
    moveCard();
}

// * move card
function moveCard(e) {
    console.log("e", e)
    allCards.forEach((elem) => {
        elem.addEventListener("mousedown", (e) => {
            overlay.style.zIndex = 1000;
        });
        overlay.addEventListener("mousemove", (e) => {
            elem.style.top = e.clientY + "px";
            elem.style.left = e.clientX + "px";
        });
        overlay.addEventListener("mouseup", () => {
            overlay.style.zIndex = -12;
        });
    });
}

moveCard();
