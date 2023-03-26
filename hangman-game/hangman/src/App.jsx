import { useState, useEffect, useMemo } from "react";
import { Container } from "./components/Container/Container";
import { Word } from "./components/Word/Word";
import { Letters } from "./components/Letters/Letters";
import { Pendu } from "./components/Pendu/Pendu";
import "./App.css";
import hangmanSvg from "./HANGMAN.svg";

const API_URL = "http://localhost:3001/";

const getWord = (langage) => {
  return fetch(API_URL, {
    method: "GET",
    mode: "cors",
    params: {
      locale: langage,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data.word);
};

function App() {
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState([]);
  const [tries, setTries] = useState(0);
  const [langage, setLangage] = useState("fr");

  const [gameover, setGameover] = useState();

  const pressLetter = (letter) => {
    if (!word.includes(letter)) {
      setTries(tries + 1);
    }
    if (tries >= 11) {
      setGameover(true);
    }
    setLetters(() => [...letters, letter]);
  };

  const foundWord = useMemo(
    () => word.split("").every((letter) => letters.includes(letter)),
    [word, letters]
  );

  const reset = () => {
    getWord(langage).then((word) => setWord(word));
    setLetters([]);
    setTries(0);
    setGameover();
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="App">
      <Container className="row child1">
        <Container className="col child2">
          <img
            src={hangmanSvg}
            alt="hangman"
            className="title-image container"
          />
          <Container className="col child3">
            <Word word={word} letters={letters} className="text text-big" />

            {!foundWord && !gameover && (
              <Letters
                pressLetter={pressLetter}
                letters={letters}
                className="text"
              />
            )}
            {gameover && (
              <button
                onClick={() => reset()}
                className="container col child4 text-xl"
              >
                Reload to play again
              </button>
            )}

            <button
              className="button2"
              onClick={() => {
                setLangage(langage === "fr" ? "en" : "fr");
                reset();
              }}
            >
              changer la langue en {langage === "fr" ? "Anglais" : "Français"}
            </button>
          </Container>
        </Container>
        <Container className="row child2">
          <Pendu tries={tries} foundWord={foundWord} />
        </Container>
      </Container>
    </div>
  );
}

export default App;
