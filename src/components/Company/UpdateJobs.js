import React, { useState, useEffect } from 'react';
import api from  '../../utils/api'


function UpdateJobs(props) {
    const [jobs, setJobs] = useState({  
        id: '',      
        title: '',
        description: '',        
    })
    const id =props.match.params.id;

    useEffect(() => {
        api()
            .get(`/api/company/${props.match.params.id}/jobs`)
            .then(res => {
                setJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    },[props.match.params.id])

    const handleChange = (e) => {
        setJobs({
            ...jobs,
            [e.target.name]: e.target.value,
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
        .put(`/api/company/${id}/jobs${jobs.id}`, jobs)
        .then(res => {
            props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <h1>Update Jobs</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='title' 
                placeholder='Title' 
                value={jobs.title} 
                onChange={handleChange} />
            <input 
                type='text' 
                name='description' 
                placeholder='Description' 
                value={jobs.description} 
                onChange={handleChange} />            

            <button type='submit'>Update</button> 
        </form>

        </>
    )
}

export default UpdateJobs;