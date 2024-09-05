
import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("we r about to list the employee")
  let showEmployee = true;

  
  return (
    <>
     
      {showEmployee ? <Employee name="meet"/> : null}
    </>
  );
}

export default App;
