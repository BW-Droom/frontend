import React from "react";  
import { connect } from 'react-redux';
import { deleteJob } from '../../store/actions/index';
import Job from './Job';
function List(props) {  
    const jobs = props.jobs;
    const listItems = jobs.map((job) =>
      <Job
        job={job}
        key={job.id}
        deleteJob={props.deleteJob.bind(null, job.id)}
      />
      )
  return (
    <>
      {listItems}
    </>
  );
}
export default connect(null, { deleteJob })(List);