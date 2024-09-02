const api = "https://api.adviceslip.com/advice";

let idOuter = 1;
let adviceOuter = "";

const getApi = async function () {
    const id = document.querySelector(".id");
    const adviceElem = document.querySelector(".advice");

    let data = await fetch(api);
    console.log(data);
    let advice = await data.json();
    console.log(advice);

    console.log(advice.slip["id"]); // * advice id
    console.log(advice.slip["advice"]); // * advice

    id.innerHTML = `advice #${advice.slip["id"]}`;
    adviceElem.innerHTML = `"${advice.slip["advice"]}"`;

    idOuter = `advice #${advice.slip["id"]}`;
    adviceOuter = `"${advice.slip["advice"]}"`;
};

const callCopy = function () {
    alert("Coppied ");
    window.navigator.clipboard.writeText(idOuter + " " + adviceOuter + "\n");
};

function getSum(num1, num2) {
    return num1 + num2;
}

function temp(getSum) {}

temp(function () {
    console.log("asdf");
    return 10;
});

setInterval(() => {}, 100);
