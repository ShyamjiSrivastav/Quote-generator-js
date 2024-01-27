const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuote = document.querySelector("#new-quote");

async function getQuote(){
  const response=await fetch("https://api.quotable.io/random?maxLength=100");
  const data=await response.json();
  quote.innerHTML=data.content;
  author.innerHTML= `- ${data.author}`;
  console.log(data);
}

newQuote.addEventListener("click", getQuote);






    



