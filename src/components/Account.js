import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function Account(props) {
    const [userProfile,setUserProfile] = useState({
        name: '',
        email: '',
        occupation: '',
        experience: '',
        droom: '',
        password: '',
    })
    useEffect(() => {
        api()
            .get('#')
            .then(res => {
                setUserProfile({
                    name: res.data.name,
                    email: res.data.email,
                    occupation: res.data.occupation,
                    experience: res.data.experience,
                    droom: res.data.droom,
                    password: res.data.password
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <>
        <h1>Name: {userProfile.name}</h1>
        <h1>Age: {userProfile.age}</h1>
        <h1>Occupation: {userProfile.occupation}</h1>
        <h1>Interests: {userProfile.droom}</h1>
        <h1>Dream Job: Software Developer</h1>
        <button>Edit</button>
        </>
    )
}

export default Account