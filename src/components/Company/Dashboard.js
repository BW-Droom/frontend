// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchEmployee } from '../actions/index';

// function CompanySwiping(props) {

//     useEffect(() => {
//       props.fetchEmployee();
//     }, []);
//     console.log(props.employee)
//     return(
//         <>
//         {props.employee.employee.employees.map(employee => {
//           return (
//             <div>
//               <h1>{employee.name}</h1>
//               <p>{employee.email}</p>
//               <p>{employee.experience}</p>
//             </div>
            
//           )
//         })}
//         </>
//     )
// }

// function mapStateToProps(state) {
//     return {
//       employee: state
//     }
//   }
  
//   const mapDispatchToProps = {
//     fetchEmployee
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CompanySwiping);  

import React from "react";
import ListView from './Employee/EmployeeShowList'


function CompanySwiping(props) {
  //console.log('rendering')

  return (
    <>
        <div >
          <ListView />
        </div>
    </>
  );
}

export default CompanySwiping