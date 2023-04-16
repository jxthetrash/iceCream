import Picker from "./components/Picker";

function App() {
  return (
    <div className="App">
      <header className="App-header sticky-top" id="header" onClick={() => window.location.reload(false)}>
        <h1 className="d-flex justify-content-center border-bottom ">THE ICE CREAM STORE</h1>
      </header>

      <Picker />
    </div>
  );
}

export default App;
