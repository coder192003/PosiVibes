// Define arrays of quotes and authors
const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your time is limited, don't waste it living someone else's life."
];

//Maintain the index for current quote
let currentQuoteIndex = -1;

// Function to display a random quote
function displayRandomQuote() {
  const quoteContainer = document.getElementById("container");
  const quoteText = document.getElementById("quote-text");

  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Get the corresponding quote using the random index
  const randomQuote = quotes[randomIndex];

  // Update the current quote index
  currentQuoteIndex = randomIndex;

  // Display the quote text
  quoteText.textContent = randomQuote;
}

// Function to add a new quote
function addNewQuote() {
  const newQuoteInput = document.getElementById("new-quote-input");
  const newQuote = newQuoteInput.value.trim();

  if (newQuote !== "") {
    quotes.push(newQuote);
    newQuoteInput.value = ""; // Clear the input field
  }
}

// Function to delete the current quote
function deleteQuote() {
  if (currentQuoteIndex !== -1) {
    quotes.splice(currentQuoteIndex, 1);
    currentQuoteIndex = -1; // Reset the current quote index
    displayRandomQuote();
  }
}
