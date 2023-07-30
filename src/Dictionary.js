import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching definition of ${word} `);
    let apiKey = "02060cacd430ctof7d20b656741fc18d";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
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
