import TopBar from "./TopBar";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <main>
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
