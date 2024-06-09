import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <diV key={results.id}>
          <h2>{result.original_title}</h2>
        </diV>
      ))}
    </div>
  );
}
