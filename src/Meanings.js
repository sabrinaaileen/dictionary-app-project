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
        <div className="row">
          <div className="col-6">
            <p>
              Definition: <br />
              {props.meaning.definition}
            </p>
            <p>
              <em>{props.meaning.example}</em>
            </p>
          </div>
          <div className="col-6">
            <p>
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
