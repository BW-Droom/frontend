import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from '../actions/getEmployees';

function CompanySwiping(props) {

    useEffect(() => {
      props.fetchEmployee();
    }, []);
    console.log(props.employee)
    return(
        <>
        {props.employee.employee.employees.map(employee => {
          return (
            <div>
              <h1>{employee.name}</h1>
              <p>{employee.email}</p>
              <p>{employee.experience}</p>
            </div>
            
          )
        })}
        </>
    )
}

function mapStateToProps(state) {
    return {
      employee: state
    }
  }
  
  const mapDispatchToProps = {
    fetchEmployee
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompanySwiping);  