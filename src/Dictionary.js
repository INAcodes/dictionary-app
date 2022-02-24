import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword]= useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //documentatio:https://dictionaryapi.dev/
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (<div className="Dictionary">
       <form onSubmit={search}>
        <input type="search"  onChange={handleKeywordChange} />
       </form>
    </div>
    );
}