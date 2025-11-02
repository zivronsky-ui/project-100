import React from "react";
function Registration() {
  function addPerson() {
    localStorage.setItem("", input.value);
  }
  return (
    <>
      <input type="text" id="add" />
      <button onClick={addPerson}>Add User</button>
    </>
  );
}
export default Registration;
