import React from 'react';
import { Link } from 'react-router-dom'
import JobCard from './JobCard';

export default function JobDetails({ job, handleDelete }) {
  return (
    <Link to={`/company/${job.id}`}>
      <JobCard job={job} handleDelete={handleDelete} />
      <button onClick={(e) => handleDelete(e, job.id)}>Delete</button>
    </Link>
  );
}