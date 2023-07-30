import React from "react";

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
      </div>
    </div>
  );
}
