import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess]);
    // We have to do this as setting state is asynchronous and won't update until this entire function runs
    const totalGuesses = guesses.length + 1;
    // Checks to see if the user has won or not
    checkGameStatus(guess, answer, totalGuesses);
  };

  const checkGameStatus = (guess, answer, totalGuesses) => {
    const result = checkGuess(guess, answer);
    const win = result.every((element) => element.status === "correct");

    if (win) {
      setGameStatus("won");
    }

    if (!win && totalGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    } else {
      setGameStatus("running");
    }
  };

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <WonBanner numberOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
