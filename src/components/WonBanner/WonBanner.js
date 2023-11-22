import React from "react";
import Banner from "../Banner";

function WonBanner({ numberOfGuesses }) {
  return (
    <Banner className="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses} {numberOfGuesses === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
