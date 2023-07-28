import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching definition of ${word} `);
  }
  function handleWordsearch(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={handleWordsearch} />
      </form>
    </div>
  );
}
