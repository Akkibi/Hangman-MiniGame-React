import "./Pendu.css";

import HangmanWon from "../../hangman-poses/0.svg";
import Hangman1 from "../../hangman-poses/1.svg";
import Hangman2 from "../../hangman-poses/2.svg";
import Hangman3 from "../../hangman-poses/3.svg";
import Hangman4 from "../../hangman-poses/4.svg";
import Hangman5 from "../../hangman-poses/5.svg";
import Hangman6 from "../../hangman-poses/6.svg";
import Hangman7 from "../../hangman-poses/7.svg";
import Hangman8 from "../../hangman-poses/8.svg";
import Hangman9 from "../../hangman-poses/9.svg";
import Hangman10 from "../../hangman-poses/10.svg";
import Hangman11 from "../../hangman-poses/11.svg";
import Hangman12 from "../../hangman-poses/12.svg";

// let actualState = 1;
const hangmanImages = [
  // Hangman0,
  Hangman1,
  Hangman2,
  Hangman3,
  Hangman4,
  Hangman5,
  Hangman6,
  Hangman7,
  Hangman8,
  Hangman9,
  Hangman10,
  Hangman11,
  Hangman12,
];

var styleLost = {};
var styleWon = {};

export const Pendu = ({ tries, foundWord = false }) => {
  //set background image to hangmanImages[actualState] no-repeat center
  styleLost = {
    background: `url(${hangmanImages[tries]}) center center / contain no-repeat`,
  };
  styleWon = {
    background: `url(${HangmanWon}) center center / contain no-repeat`,
  };

  if (foundWord)
    return <div style={styleWon} className="image-background"></div>;
  return <div style={styleLost} className="image-background"></div>;
};
