import React, { useState, useEffect } from "react";
import api from '../../utils/api';
import JobDetails from "./JobDetails";

 function JobList (props) {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    api()
    .get(`/api/company/${props.match.params.id}/jobs`)
    .then(res => setJobs(res.data))
    .catch(err => console.log(err.response));
  }, [])

  const handleDelete = (e, id) => {
    e.preventDefault()
    const job = jobs.find(job => job.id === id)

    if (window.confirm('Are you sure you want to delete this job?'))
    setJobs(jobs.filter(job => job.id !== id))
    api()
        .delete(`/api/company/${id}/jobs/`)
      .then(res => {
        console.log('job was deleted!')
      })
      .catch(err => {
        console.log(err, err.response)
        setJobs([ ...jobs, job ])
      })
  }

  return (
    <div >
      {jobs.map(job => (
        <>
        <JobDetails key={job.id} job={job} handleDelete={handleDelete} />
        </>
      ))}
    </div>
  );
}

export default JobList;