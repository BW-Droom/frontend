import React, { useState } from 'react';
import api from '../../utils/api';

function EditACC(props) {
    const [newUserProfile,setNewUserProfile] = useState({
        name: '',
        email: '',
        occupation: '',
        experience: '',
        dream_job: ''
    })

    const handleChange = (e) => {
        setNewUserProfile({
            ...newUserProfile,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        api()
            .put('/api/seeker/4', newUserProfile)
            .then(res => {
                props.history.push('/seeker/account')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        <h1>Update User</h1>

        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' value={newUserProfile.name} onChange={handleChange} />
            <input type='email' name='email' placeholder='Email' value={newUserProfile.email} onChange={handleChange} />
            <input type='text' name='occupation' placeholder='Email' value={newUserProfile.occupation} onChange={handleChange} />
            <input type='text' name='experience' placeholder='Email' value={newUserProfile.experience} onChange={handleChange} />
            <input type='text' name='dream_job' placeholder='Email' value={newUserProfile.dream_job} onChange={handleChange} />
            <button type='submit'>Save</button>
        </form>
        </>
    )
}

export default EditACC