let text = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("new-quote");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      text.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);