import "./App.css";
import Employee from "./components/Employee";

import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  console.log("we r about to list the employee");
  let showEmployee = true;

  const [role, setRole] = useState("dev");
  const [employee, setEmployee] = useState([
    {
      name: "meet",
      role: "head-Developer",
      img: "https://images.pexels.com/photos/7688086/pexels-photo-7688086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "aby",
      role: "senior-Developer",
      img: "https://images.pexels.com/photos/7552372/pexels-photo-7552372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "amy",
      role: "junior-Developer",
      img: "https://images.pexels.com/photos/12903143/pexels-photo-12903143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "mayene",
      role: "intern-Developer",
      img: "https://images.pexels.com/photos/12903191/pexels-photo-12903191.jpeg",
    },
    {
      name: "jina",
      role: "Designer",
      img: "https://images.pexels.com/photos/7792859/pexels-photo-7792859.jpeg",
    },
    {
      name: "lady zhen",
      role: "sales-Assistant",
      img: "https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "da-xiao",
      role: "HR",
      img: "https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

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
        {showEmployee ? (
          <>
            <div className="flex flex-wrap justify-center">
              {employee.map((employee) => {
                return (
                  <Employee
                    key={uuidv4()}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                  />
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
