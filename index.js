let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
     person: "Nelson Mandela"}, 
    {quote: "The way to get started is to quit talking and begin doing.",
      person: "Walt Disney"},
    {quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
     person: "Oprah"},
    {quote:"Life is what happens when you're busy making other plans",
     person: "John Lenon"},
    {quote:"It is during our darkest moments that we must focus to see the light",
     person: "Aristotle"}
];

btn.addEventListener("click", function (){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})