import React, { useState, useEffect } from "react";
import api from '../../utils/api';
import JobDetails from "./JobDetails";
import { Link } from 'react-router-dom';
import JobCard from './JobCard'

 function JobList (props) {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        api()
        .get(`/api/company/4/jobs`)
        .then(res=> {
            console.log(res)
            setJobs(res.data)
        })
        .catch(err=> console.log(err))
    }, [])
    
    return (
        <div>
             
            {jobs.map(job => (
                <JobDetails key={jobs.id} job={job}
                />
            ))}
        </div>
    );
    
};

function JobsDetails({ job, handleDelete }) {
  
    return (
      <Link to={`/listing/${job.id}`}>

        {jobs.map(job =>(
            <JobCard title={job.job_title} 
        description={job.description}/>))}
        )

            
        
      </Link>
    );
  }

export default JobList;