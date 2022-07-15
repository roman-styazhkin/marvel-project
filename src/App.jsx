import Header from "./components/Header/Header";
import RandomChar from "./components/RandomChar/RandomChar";

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <RandomChar />
      </main>
    </div>
  );
}

export default App;
