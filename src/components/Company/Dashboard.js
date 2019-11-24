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


function CompanySwiping(props) {
  //console.log('rendering')

  return (
    <>
        <div >
          {/* <h1>{props.employee.name}</h1>
          <p>{props.employee.email}</p>
          <p>{props.employee.experience}</p>    */}
        </div>
    </>
  );
}

export default CompanySwiping