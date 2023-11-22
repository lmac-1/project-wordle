import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  // Exercise 2: renamed variable to tentativeGuess so it's really clear that it's a guess in progress
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // When you write to the console in this way console.log({variableName}) it makes it clearer in the console what you are logging
    console.log({ tentativeGuess });
    setTentativeGuess("");

    handleSubmitGuess(tentativeGuess);
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        // There seems to be a bug with minLength/maxLength so we will use pattern for now
        pattern="^[a-zA-Z]{5}$"
        // This will show up in the pattern validation text to give the user information
        title="5 letter word"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          // We change the guess to uppercase as soon as it is entered
          // Josh prefers to put this part on a separate line, but that's up to preference
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
