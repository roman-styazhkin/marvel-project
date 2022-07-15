import Header from "./components/Header/Header";
import RandomChar from "./components/RandomChar/RandomChar";
import CharList from "./components/CharList/CharList";
import decoration from "./img/vision.png";
import CharInfo from "./components/CharInfo/CharInfo";

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <RandomChar />

        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>

        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
}

export default App;
