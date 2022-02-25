import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <Dictionary />
      </main>
      <hr />
      <footer className="text-center">
        Coded by{" "}
        <a href="https://github.com/INAcodes/dictionary-app">
          <em>INA HADAJ</em>
        </a>
      </footer>
    </div>
  );
}


