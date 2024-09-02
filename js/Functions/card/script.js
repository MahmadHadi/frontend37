const api = "http://127.0.0.1:3000/card-data.json";

const generateCard = async () => {
    const container = document.querySelector(".container");
    const data = await fetch(api);
    // console.log(data);

    const cardData = await data.json();
    // console.log(cardData[100]);

    const randomNumber = Math.floor(Math.random() * 999);
    console.log(cardData[randomNumber]);
    const cardDisplay = cardData[randomNumber];

    const card = `<div class="card">
    <div class="id">${cardDisplay.id}</div>

    <div class="border"></div>

    <div class="img">
        <img src="https://picsum.photos/100/?random=${randomNumber}" alt="" />
    </div>

    <div class="border"></div>

    <div class="card-bottom">
        <div class="left">${cardDisplay.title}</div>
        <div class="right">${cardDisplay.date}</div>
    </div>
    <div class="btn">
                    <button onclick="generateCard()">Click</button>
                </div>
</div>
`;

    container.innerHTML = card;
};
