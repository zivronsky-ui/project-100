import React, { useState } from "react";

const initGameNumber = Math.floor(Math.random() * 100);
function BasicGame() {
  //   console.log(initGameNumber);
  const [gameNumber, setGameNumber] = useState(initGameNumber);
  console.log(gameNumber);

  const [score, setScore] = useState(0);

  const add = () => {
    setGameNumber((prev) => prev + 1);
    setScore((prev) => prev + 1);
  };

  const minus = () => {
    setGameNumber((prev) => prev - 1);
    setScore((prev) => prev + 1);
  };
  const multiply = () => {
    setGameNumber((prev) => prev * 2);
    setScore((prev) => prev + 1);
  };
  const divide = () => {
    setGameNumber((prev) => Math.floor(prev / 2));
    setScore((prev) => prev + 1);
  };

  const win = () => {
    {
      gameNumber === 100
        ? console.log("you won!!!")
        : console.log("you have not won yet");
    }
  };

  return (
    <>
      <p>Current number: {gameNumber}</p>
      <p>Score: {score}</p>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={multiply}>*2</button>
      <button onClick={divide}>/2</button>
      <button onClick={win}>check</button>
    </>
  );
}
// /*
// person gets number between 0 and 99
// four buttons one to add ~number~, one to subtract ~number~, one to multiply by 2, one to divide by 2 (bigger of the two when original number is odd)
// if number === 100 : game over
// numberOfMoves s saved to ls
// */

export default BasicGame;
