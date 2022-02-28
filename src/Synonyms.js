import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul >
          {props.synonyms.map(function(synonym, index){
            if (synonym.length > 0){
              return (
                <li key={index}>
                  <strong>Similar:</strong>
                    {synonym}
                </li>
                );
                }else{
                  return null;
                }
              })}
            </ul>
          </div>
        );
              } else {
                return null;
              }
}