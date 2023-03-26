import "./Word.css";

export const Word = ({ className, word, letters }) => {
  return (
    <div className={className}>
      <h1 className="align-center">
        {word
          .split("")
          .map((letter) => (letters.includes(letter) ? letter : "_"))
          .join("")}
      </h1>
    </div>
  );
};
