import React, { useState } from "react";

const initGameNumber = Math.floor(Math.random() * 100);
function BasicGame({ isActive, onTurnEnd }) {
  //   console.log(initGameNumber);
  const [gameNumber, setGameNumber] = useState(initGameNumber);
  console.log(gameNumber);

  const [score, setScore] = useState(0);

  const add = () => {
    setGameNumber((prev) => prev + 1);
    setScore((prev) => prev + 1);
    onTurnEnd();
  };

  const minus = () => {
    setGameNumber((prev) => prev - 1);
    setScore((prev) => prev + 1);
    onTurnEnd();
  };

  const multiply = () => {
    setGameNumber((prev) => prev * 2);
    setScore((prev) => prev + 1);
    onTurnEnd();
  };

  const divide = () => {
    setGameNumber((prev) => Math.floor(prev / 2));
    setScore((prev) => prev + 1);
    onTurnEnd();
  };

  const win = () => {
    window.alert("You win!");
    localStorage.setItem(initGameNumber, score); //key should be username
    window.location.reload();
  };

  const winCheck = () => {
    {
      gameNumber === 100 && win();
    }
  };
  winCheck();

  return (
    <>
      <p>Current number: {gameNumber}</p>
      <p>Score: {score}</p>
      {isActive && (
        <>
          <button onClick={add}>+1</button>
          <button onClick={minus}>-1</button>
          <button onClick={multiply}>*2</button>
          <button onClick={divide}>/2</button>
        </>
      )}
    </>
  );
}
<<<<<<< HEAD
// /*
// person gets number between 0 and 99
// four buttons one to add ~number~, one to subtract ~number~, one to multiply by 2, one to divide by 2 (bigger of the two when original number is odd)
// if number === 100 : game over
// numberOfMoves s saved to ls
// */
=======
>>>>>>> 21c72f8b2e787e64bd6381bd0a647ada18c66305

export default BasicGame;
