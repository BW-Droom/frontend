import React from "react";  
import { connect } from 'react-redux';
import { deleteJob } from '../../store/actions/index';
import Job from './Job';

function List(props) { 
  console.log(props) 
    
     
      
      
  return (
    <>     
      
    {props.jobs.map(job => (
       <Job
       job={job}
       key={job.id}
       deleteJob={props.deleteJob.bind(null, job.id)}
     /> 
     ))}   
      
    </>
  );
}

export default connect(null, { deleteJob })(List);