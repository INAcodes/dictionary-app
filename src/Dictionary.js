import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(){
    let [keyword, setKeyword]= useState("");
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]= useState(false);


    function handleSubmit(event){
        event.preventDefault();
        search();
    }


    function search(){
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //documentatio:https://dictionaryapi.dev/
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
      setLoaded(true);
      search();
    }
     
    if (loaded){
    return (
    <div className="Dictionary">
     <section>
       <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search"  onChange={handleKeywordChange} />
        </form>
       <div className="hint">
         suggested words: sunset, wine, yoga, plant...
        </div>
      </section>
       <Results results={results} />
    </div>
    );
     } else { 
        load();
      return "Loading";
  }
}