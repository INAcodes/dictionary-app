import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props){
    let [keyword, setKeyword]= useState(props.defaultKeyword);
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
          <input type="search"  
                 onChange={handleKeywordChange} 
                 placeholder="Search for a word"
                 defaultValue={props.defaultKeyword}
                 autofocus={true}
                 className="form-control search-input" />
        </form>
       <small className="hint">
         i.e. sunset, wine, yoga, coding...
        </small>
      </section>
       <Results results={results} />
    </div>
    );
     } else { 
        load();
      return "Loading";
  }
}