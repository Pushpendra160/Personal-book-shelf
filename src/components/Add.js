import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.docs) {
          setResults(data.docs);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a book"
              value={query}
              onChange={onChange}
            />
          </div>

          {results && results.length > 0 && (
            <ul className="results">
              {results.map((book) => (
                <li key={book.key}>
                  <ResultCard book={book} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
