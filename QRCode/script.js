const btn = document.querySelector(".btn");
const img = document.querySelector("img");
const link = document.querySelector(".qr-input");

const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`;

btn.addEventListener("click", async () => {
    if (link.value == "") {
        alert("Invalid input ");
        return;
    }

    // const data = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + link.value)

    const data = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link.value}`);
    // console.log(data.url);

    img.src = data.url;
});
