import React from "react";
import Button from '@material-ui/core/Button';

function Job(props) {
 console.log(props.job)
  return (
    <>
        <div className='jobcontainer'>
          Title: {props.job.job_title} <br />   
          ID: {props.job.id} <br/>       
          Description: {props.job.description} <br/><br/>
          
          <Button variant='contained' color='primary' onClick={props.deleteJob}>Delete Job</Button>
        </div>
    </>
  );
}

export default Job