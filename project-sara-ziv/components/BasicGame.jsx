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
    // window.alert("You win!");
    const result = confirm("ניצחת! האם תרצה משחק נוסף??");
    if (result) {
      window.location.reload();
    } else {
      alert("byee");
    }
    localStorage.setItem(initGameNumber, score); //key should be username
  };

  const winCheck = () => {
    {
      gameNumber === 100 && win();
    }
  };
  winCheck();

  return (
    <>
      <div id="theGame">
        <div id="board">
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
        </div>
      </div>
    </>
  );
}

export default BasicGame;
