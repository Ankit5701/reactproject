import React from 'react'
import axios from 'axios';

function getQuotes() {
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author");
    const btn = document.querySelector("#btn");
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
       .then(data => {
   quote.innerHTML="\""+data.content+"\"";
   author.innerHTML=data.author;
})
}
export default function Scr() {
  return (
    <div><div class="container">
    <div class="quote-box">
        <p id="quote">
        “Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.”
        </p>
        <small id="author">Dr. APJ Abdul Kalam</small>
    </div>
    <button class="btn" onClick={getQuotes}><strong>Get Motivated</strong></button>
    
    
</div></div>

  )
}
// const getQuotes = async () => {
//     const api = "https://type.fit/api/quotes";
//     try {
//         let data = await fetch(api);
//     } catch (error){}
// };
