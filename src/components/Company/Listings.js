import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

function ListingList(props) {
    const [jobs, setJobs] = useState([
        {
        job_title: '',
        description: ''
        }
    ])
    console.log(props)
    useEffect(() => {
        api()
            .get(`/api/company/4/jobs`)
            .then(res => {
                console.log(res)
                setJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(jobs)
    return (
        <>
        {jobs.map(job => {
            return(
                <div key={jobs.id}>
                    <h3>{job.job_title}</h3>
                    <h4>{job.description}</h4>
                </div>
            )
        })}
        </>
    )
}

export default ListingList