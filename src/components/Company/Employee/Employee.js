import React from "react";


function Employee(props) {
  //console.log('rendering')

  return (
    <>
        <div >
          Name: {props.employee.name} <br />   
          Email: {props.employee.email} <br/>       
          Experience: {props.employee.experience} <br/><br/>    
        </div>
    </>
  );
}

export default Employee