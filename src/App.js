import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Employees from "./pages/Employees";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar>
        <Employees />
      </NavBar>
    </>
  );
}

export default App;
