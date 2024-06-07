import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f9f9f9");

  // Fetching quotes on initial load
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
    // Generate a random background color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  // Handler for tweet quote
  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote
    )} - ${encodeURIComponent(author)}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={fetchRandomQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href="#"
          onClick={tweetQuote}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default App;
