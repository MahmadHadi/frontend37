const data = [
    {
        img: `https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80`,
        text: `I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.`,
        name: `Constantine V`,
    },
    {
        img: `https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80`,
        text: `Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.`,
        name: `Cherise G`,
    },
    {
        img: `https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80`,
        text: `I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.`,
        name: `Rosetta Q`,
    },
    {
        img: `https://picsum.photos/100/?random=1`,
        text: `hadi nayani the easylearn academy javaScript html css `,
        name: `hadi `,
    },
];

const img = document.querySelector("img");
const text = document.querySelector(".text");
const name = document.querySelector(".name");

let i = 0;
setInterval(() => {
    img.setAttribute("src", data[i].img);
    text.innerHTML = data[i].text;
    name.innerHTML = data[i].name;

    i++;
    if (i > data.length - 1) {
        i = 0;
    }
    console.log(i);
}, 2000);
