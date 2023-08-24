import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Meanings(props) {
  return (
    <div>
      <h5>
        <b>{props.meaning.partOfSpeech}</b>
      </h5>

      <div className="Meanings">
        <div>
          <strong>Definition: </strong>
          <br />
          {props.meaning.definition}
        </div>
        <div>
          <em>{props.meaning.example}</em>
        </div>
      </div>

      <div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
