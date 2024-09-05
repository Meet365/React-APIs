function Employee(props){


    // we  cant change value of prop or else it will giv error
    // so we use state which makes it possible to change the user interface on change 

    return (
        <>
           <h3>Employee {props.name}</h3>
           <p>{props.role ? props.role : 'no-role'}</p>

        
        </>
    );
}



export default Employee