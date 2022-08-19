import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          React app for testing of my daily leetcoding
        </h1>
        <p>Stack: React, Typescript, TailwindCSS</p>
        <form>
          <label>
          Number 1:
          <input type="text" name="nr1" />
          </label>
          <label>
          Number 2:
          <input type="text" name="nr2" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default App;
