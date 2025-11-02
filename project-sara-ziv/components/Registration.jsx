import React from "react";
import { useState } from "react";
function Registration() {
  const [nameValue, setNameValue] = useState("");
  const [userArr, setUserArr] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.name.value;
    localStorage.setItem(inputValue, inputValue);
    event.target.reset();
    setNameValue(inputValue);
    console.log(inputValue);
    setUserArr(
      userArr.push({ name: inputValue, score: 0, status: "wait for your turn" })
    );
    // userArr.map((user)=>{})
    function passTheTurn() {
      // פונקציה שאמורה להעבירר את התור כאשר מישהו לוחץ ל כפתור מסויים ואז מוסיפים את זה לתוך הפונקציות שמחכות לONCLICK
      userArr[currentIndex + 1].status = "your turn";
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input name="name" />
          <button type="submit">Add person</button>
        </form>
      </>
    );
  }
  export default Registration;
}
// status =
