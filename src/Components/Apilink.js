const quote = document.querySelector("#quote");
        const author = document.querySelector("#author");
        const btn = document.querySelector("#btn");

        // btn.addEventListener("click",getQuotes);
        function getQuotes() {
             fetch("http://api.quotable.io/random")
                 .then(res => res.json())
                .then(data => {
            quote.innerHTML="\""+data.content+"\"";
            author.innerHTML=data.author;
         })
        }