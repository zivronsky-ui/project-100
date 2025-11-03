import { useState } from "react";
import "./App.css";
import Registration from "./components/Registration";
// import BasicGame from "../components/BasicGame";
import Boards from "./components/Boards";

function App() {
  return (
    <>
      <Registration />
      {/* <BasicGame /> */}
      <Boards />
    </>
  );
}

export default App;
