import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  console.log("we r about to list the employee");
  let showEmployee = true;

  const [role, setRole] = useState("dev");

  return (
    <>
    <div className="App ">
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      ></input>
      {showEmployee ? 
      <>
      <div className="flex flex-wrap justify-center">

     
      <Employee name="meet" role={role} img="https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
      <Employee name="aby" role={role} img="https://images.pexels.com/photos/7993953/pexels-photo-7993953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
      <Employee name="met" role={role} img="https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
      <Employee name="andy" role={role} img="https://images.pexels.com/photos/7993953/pexels-photo-7993953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
      <Employee name="dina" role={role} img="https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
      <Employee name="jina" role={role} img="https://images.pexels.com/photos/7993953/pexels-photo-7993953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
      </div>
      </>
      : null}
    </div>
    </>
  );
}

export default App;
