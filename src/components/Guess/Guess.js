import React from "react";
import { range } from "../../utils";

function Guess({ value, checkGuess }) {
  const validateGuess = checkGuess(value);

  return (
    <p className="guess">
      {range(5).map((num) => {
        let className = "cell";
        if (value) {
          className = className + " " + validateGuess[num].status;
        }
        return (
          <span key={num} className={className}>
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
