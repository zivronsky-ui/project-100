import React from "react";
import { useState } from "react";
import BasicGame from "./BasicGame";
import Boards from "./Boards";
function Registration() {
  const [nameValue, setNameValue] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [userArr, setUserArr] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.name.value;
    localStorage.setItem(inputValue, 0);
    event.target.reset();
    setNameValue(inputValue);
    setUserArr([...userArr, inputValue]);
    console.log(inputValue);
    console.log(userArr);
    console.log(userArr.length);
  }
  function startGame() {
    console.log("start");
    setIsStart(true);
  }
  return (
    <>
      <div id="addPerson">
        <form onSubmit={handleSubmit}>
          <input name="name" />
          <button type="submit">Add person</button>
        </form>
        {/* {isStart ? ( */}{" "}
        <button style={{ display: "none" }} onClick={startGame}>
          Start{" "}
        </button>
        {/* ) : ( */}
        <button onClick={startGame}>Start</button>
        {/* )} */}
      </div>
      {isStart ? (
        <div>
          <Boards />
        </div>
      ) : null}
    </>
  );
}
export default Registration;
