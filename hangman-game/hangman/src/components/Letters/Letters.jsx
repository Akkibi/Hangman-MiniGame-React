import "./Letters.css";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const Letters = ({ className, pressLetter, letters }) => {
  return (
    <div className={className}>
      {alphabet.split("").map((letter) => (
        <button
          className="button"
          key={letter}
          onClick={() => pressLetter(letter)}
          disabled={letters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
