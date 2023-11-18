import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const convertedGuess = guess.toUpperCase();
    console.log({ guess: convertedGuess });
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        style={{ textTransform: "uppercase" }}
        minLength={5}
        pattern="^[a-zA-Z]{5}$"
        required
      />
    </form>
  );
}

export default GuessInput;
