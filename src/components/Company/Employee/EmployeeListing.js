import React from "react";
import { connect } from 'react-redux';
import Employee from './Employee';

function List(props) {
    console.log(props)
  return (
    <>
    
      {props.employees.map(employee => (
       <Employee
       employee={employee}
       key={employee.id}
     />
      ))}
    </>
  );
}

export default connect(null)(List);