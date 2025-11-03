import React, { useState } from "react";
import BasicGame from "./BasicGame";

function Boards() {
  const [turn, setTurn] = useState(0);
  const changeTurn = () => {
    setTurn((prevTurn) => (prevTurn + 1) % 2);
  };
  return (
    <div>
      <BasicGame isActive={turn === 0} onTurnEnd={changeTurn} />
      <BasicGame isActive={turn === 1} onTurnEnd={changeTurn} />
      {/* <BasicGame isActive={turn === 2} onTurnEnd={changeTurn} /> */}
    </div>
  );
}

export default Boards;
