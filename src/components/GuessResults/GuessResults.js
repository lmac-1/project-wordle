import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, checkGuess }) {
  return (
    <div className="guess-results">
      {/* Exercise 3: generates the grid for the guesses */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} checkGuess={checkGuess} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
