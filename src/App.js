import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <div>
          This Dictionary App was coded by Sabrina Aileen Hodapp and is
          open-sourced on GitHub
        </div>
      </footer>
    </div>
  );
}

export default App;
