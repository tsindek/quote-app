const button = document.querySelector(".button");

button.addEventListener("click", () => {
  fetchQuote();
});

function fetchQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((quoteData) => {
      const quoteText = quoteData.data[0].quoteText;
      const quoteAuthor = quoteData.data[0].quoteAuthor;
      const quoteTextPlaceholder = document.querySelector(".quote__text");
      const quoteAuthorPlaceholder = document.querySelector(".author");

      quoteTextPlaceholder.textContent = quoteText;
      quoteAuthorPlaceholder.textContent = "- " + quoteAuthor;

      /* possible way to code it:
        document.querySelector(".quote__text").textContent =
          quoteData.data[0].quoteText;
    
        document.querySelector(".author").textContent =
          quoteData.data[0].quoteAuthor;
        */
    });
}

fetchQuote();
