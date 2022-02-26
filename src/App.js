import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
      <hr />
      <footer className="text-center">
        This project was coded by {" "}
        <a href="/"
           target="_blank"
           rel="noopener noreferrer">
          <em>INA HADAJ</em>
        </a>
        {" "}and is {" "}<a href="https://github.com/INAcodes/dictionary-app"
           target="_blank"
           rel="noopener noreferrer">open-sourced on GitHub</a> {" "}and {" "}
           <a href="https://sharp-swartz-07309e.netlify.app"
            target="_blank"
            rel="noopener noreferrer">hosted on Netlify</a>
      </footer>
    </div>
  );
}


