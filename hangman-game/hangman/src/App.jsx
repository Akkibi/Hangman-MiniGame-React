import { useState, useEffect, useMemo } from "react";
import { Container } from "./components/Container/Container";
import { Word } from "./components/Word/Word";
import { Letters } from "./components/Letters/Letters";
import { Pendu } from "./components/Pendu/Pendu";
import "./App.css";
import hangmanSvg from "./HANGMAN.svg";

// const response = await fetch("http://localhost:3001", {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     Authorization: `Bearer: ${token}`,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });
//
// console.log(response.json());

function App() {
  useEffect(() => {
    const API_URL = "http://localhost:3001";
    fetch(API_URL)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setWord(data.word);
      });
  });

  const [word, setWord] = useState("");
  const [letters, setLetters] = useState([]);
  const [tries, setTries] = useState(0);

  const [gameover, setGameover] = useState();

  const pressLetter = (letter) => {
    if (!word.includes(letter)) {
      setTries(tries + 1);
    }
    if (tries >= 11) {
      setGameover("reload the page to play again");
    }

    setLetters(() => [...letters, letter]);
  };

  useEffect(() => {
    setWord(response.word);
  }, []);

  const foundWord = useMemo(
    () => word.split("").every((letter) => letters.includes(letter)),
    [word, letters]
  );

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
            {/* if !foundWord and !gameover insert letters, else insert gameover*/}
            {!foundWord && !gameover && (
              <Letters
                pressLetter={pressLetter}
                letters={letters}
                className="text"
              />
            )}
            {gameover && (
              <Container className="col child4">{gameover}</Container>
            )}
          </Container>
        </Container>
        <Container className="row child2">
          <Pendu tries={tries} foundWord={foundWord} />
          {/* pendu */}
        </Container>
      </Container>
    </div>
  );
}

export default App;
