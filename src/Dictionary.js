import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(){
    let [keyword, setKeyword]= useState("");
    let [results, setResults]= useState({});

    function search(event){
        event.preventDefault();


        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //documentatio:https://dictionaryapi.dev/
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
       <form onSubmit={search}>
        <input type="search"  onChange={handleKeywordChange} />
       </form>
       <Results results={results} />
    </div>
    );
}