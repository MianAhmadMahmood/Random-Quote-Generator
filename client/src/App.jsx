// App.jsx
import { useEffect, useState } from "react";

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
];

export default function App() {
  const [quote, setQuote] = useState({});

  // Generate random quote
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  // Show random quote on first load
  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl p-8 text-center">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          ✨ Random Quote Generator
        </h1>

        <div className="mb-8">
          <p className="text-2xl text-gray-700 leading-relaxed font-medium">
            “{quote.text}”
          </p>

          <h3 className="mt-6 text-lg font-semibold text-indigo-600">
            — {quote.author}
          </h3>
        </div>

        <button
          onClick={generateQuote}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
        >
          🔄 New Quote
        </button>
      </div>
    </div>
  );
}