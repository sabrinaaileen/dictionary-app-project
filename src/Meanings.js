import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div>
      <h5>
        <b>{props.meaning.partOfSpeech}</b>
      </h5>

      <div className="Meanings">
        <p>{props.meaning.definition}</p>
        <p>
          <em>{props.meaning.example}</em>
        </p>
        <p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
