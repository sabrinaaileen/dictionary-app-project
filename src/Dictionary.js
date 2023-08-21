import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function handlePhotoResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function searchWord(event) {
    event.preventDefault();

    let apiKey = "02060cacd430ctof7d20b656741fc18d";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(url).then(handleResponse);

    let photoApiKey = "02060cacd430ctof7d20b656741fc18d";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}}&key=${photoApiKey}`;

    axios.get(photoApiUrl).then(handlePhotoResponse);
  }
  function handleWordsearch(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={searchWord}>
          <input type="search" onChange={handleWordsearch} />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
