import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]= useState(false);
    let [photos, setPhotos]= useState(null);

    function handleSubmit(event){
        event.preventDefault();
        search();
    }


    function search(){
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //documentatio:https://dictionaryapi.dev/
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey = `563492ad6f91700001000001488d96524af2431faf844059fae84c69`;
        let pexelsApiUrl = `https://api.pexels.com/vi/search?query=${keyword}&per_page=9`;
        let headers ={Authorization:`Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
    }

    function handleDictionResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
      setPhotos(response.data.photos);
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
       <Photos photos={photos} />
    </div>
    );
     } else { 
        load();
      return "Loading";
  }
}