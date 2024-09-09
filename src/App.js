import "./App.css";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  console.log("we r about to list the employee");
  let showEmployee = true;

  const [role, setRole] = useState("dev");
  const [employee, setEmployee] = useState([

    {
      id:1,
      name: "meet",
      role: "head-Developer",
      img: "https://images.pexels.com/photos/7688086/pexels-photo-7688086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:2,
      name: "aby",
      role: "senior-Developer",
      img: "https://images.pexels.com/photos/7552372/pexels-photo-7552372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:3,
      name: "amy",
      role: "junior-Developer",
      img: "https://images.pexels.com/photos/12903143/pexels-photo-12903143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:4,
      name: "mayene",
      role: "intern-Developer",
      img: "https://images.pexels.com/photos/12903191/pexels-photo-12903191.jpeg",
    },
    {
      id:5,
      name: "jina",
      role: "Designer",
      img: "https://images.pexels.com/photos/7792859/pexels-photo-7792859.jpeg",
    },
    {
      id:6,
      name: "lady zhen",
      role: "sales-Assistant",
      img: "https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:7,
      name: "da-xiao",
      role: "HR",
      img: "https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  function editemployee(id, newName, newRole){
          const updateemployee = employee.map((employee)=> {
            if (id === employee.id){
              return {img :employee.img, name: newName, role: newRole};
            }
            console.log(employee)
            return employee
          });
          setEmployee(updateemployee);
          
  }

  //adding new employee

  //it basically does create a new employee card with name , role, image and then using the setEMployee useState it will set the values of that useState
  //with addition to the new Value 
  
  function Newemployee(name, role, img){
    const newEmp={
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployee([...employee, newEmp])
  }

  // function NewEmployee(name,role,img){
  //    let emp = {
  //     id: uuidv4(), 
  //     name: name,
  //     role: role,
  //     img:img,
  //   }
  //   setEmployee(...employee,emp)
  // }

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
              { employee.map((employee) => {
                // here we created a new instance of th ecomponent EditEmploye and given it to a varibale and used it further with the EMployyee component to make it 
                //nore diversed
                const newedit = <EditEmployee name={employee.name} role={employee.role} editemployee={editemployee} id={employee.id} />
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    editemployee={newedit}
                  />
                );
              })}
            </div>
            <AddEmployee  newemp={Newemployee}/> 

           
          </>
        ) : null}

      </div>
    </>
  );
}

export default App;
