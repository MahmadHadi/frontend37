// * move card
function moveCard() {
    let card = document.querySelectorAll(".abs");
    let overlay = document.querySelector(".overlay");
    let cardSet = document.querySelector(".cardSet");
    let count = 0
    card.forEach((elem, i) => {
        elem.addEventListener("mousedown", () => {

            let newCard = document.createElement("div");
            newCard.className = "abs";
            newCard.innerHTML = `<div class="cards | flex j-center i-center">
                                    <span class="card-num1">${count}</span>
                                    <span class="card-icon">hadi </span>
                                    <span class="card-num2">4</span>
                                </div>`;
            cardSet.appendChild(newCard);
            elem.style.position = "absolute";
            elem.style.transform = "translate(-50%, -50%)";
            overlay.style.zIndex = 3;
        });
    });
    cardSet.forEach((elem, i) => {
        overlay.addEventListener("mousemove", (e) => {
            elem.style.top = e.clientY + "px";
            elem.style.left = e.clientX + "px";
        });
    })
    overlay.addEventListener("mouseup", () => {
        overlay.style.zIndex = -2;
    });
}

moveCard();
