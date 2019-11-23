import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { Link } from "react-router-dom"

function Account(props) {
    const [userProfile,setUserProfile] = useState({
        name: '',
        email: '',
        occupation: '',
        experience: '',
        droom: ''
    })

    useEffect(() => {
        api()
            .get(`/api/seeker/4`)
            .then(res => {
                console.log(res)
                setUserProfile({
                    name: res.data.name,
                    email: res.data.email,
                    occupation: res.data.occupation,
                    experience: res.data.experience,
                    droom: res.data.dream_job,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <>
        <h3>Name: {userProfile.name}</h3>
        <h3>Email: {userProfile.email}</h3>
        <h3>Occupation: {userProfile.occupation}</h3>
        <h3>Experience: {userProfile.experience}</h3>
        <h3>Dream Job: {userProfile.droom}</h3>
        <button><Link to='/seeker/edit'>Edit</Link></button>
        </>
    )
}

export default Account