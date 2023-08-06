import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        Synonyms:
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
