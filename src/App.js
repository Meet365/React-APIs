import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  console.log("we r about to list the employee");
  let showEmployee = true;

  const [role, setRole] = useState("dev");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      ></input>
      {showEmployee ? <Employee name="meet" role={role} /> : null}
    </>
  );
}

export default App;
