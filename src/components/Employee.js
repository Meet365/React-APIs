import EditEmployee from "./EditEmployee";


function Employee(props) {
  // we  cant change value of prop or else it will giv error
  // so we use state which makes it possible to change the user interface on change

  return (
    <>
      <div className="m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="object-cover rounded-full h-[100px] w-[100px] block  h-20 rounded-full  sm:mx-0 sm:shrink-0"
          src={props.img}
          alt="Woman's Face"
        />
        <div className="text-center space-y-5 sm:text-left" >
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{props.name}</p>
            <p className="text-slate-500 font-medium">{props.role}</p>
          </div>
          <EditEmployee name={props.name} role={props.role} editemployee={props.editemployee} id={props.id}/>
          
        </div>
      </div>
    </>
  );
}

export default Employee;
