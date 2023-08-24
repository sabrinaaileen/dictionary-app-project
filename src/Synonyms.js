import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index}>
                <li>{synonym}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
