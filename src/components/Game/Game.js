import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // gameStatus can be 'running', 'won', or 'lost'
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    // Exercise 5: We need to create this so that we can correctly check the length of the guesses within this function to check if the player has lost.
    // setState is a function that is run on the NEXT render. So the state won't update until this entire function has run.
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    // We are checking it's capitalised just to make sure that it doesn't break if the code changes somewhere else in the future
    if (tentativeGuess.toUpperCase() === "answer") {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
