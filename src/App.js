import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Employees from "./pages/Employees";
import NavBar from "./components/NavBar";
import Customers from "./pages/Customers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/employee" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </>
  );
}

export default App;
