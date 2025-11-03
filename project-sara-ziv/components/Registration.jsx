import React from "react";
import { useState } from "react";
import BasicGame from "./BasicGame";
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
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <button type="submit">Add person</button>
      </form>
      <button onClick={startGame}>Start</button>
      {isStart ? (
        <div>
          <BasicGame />
        </div>
      ) : null}
      {/* <a src="/BasicGame">start</a> */}
    </>
  );
}
// status =
export default Registration;
