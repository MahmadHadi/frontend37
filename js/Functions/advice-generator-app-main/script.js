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

    copyAdvice(advice.slip["id"], advice.slip["advice"]);
    adviceOuter = advice.slip["advice"];
    idOuter = advice.slip["id"];
};

const copyAdvice = function () {
    console.log("outer = ", idOuter);
    console.log("outer = ", adviceOuter);
    
    // window.navigator.clipboard.writeText();
};
