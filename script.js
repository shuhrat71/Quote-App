const quote = document.getElementById("quote");
const author = document.getElementById("outhor");
const api = "https://api.quotable.io/random";

async function getquote(url) {
  const respons = await fetch(url);
  var data = await respons.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = `<span>From:${data.author}</span>`;
}
getquote(api);
