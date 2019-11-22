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
        <main>
        <h3>Name: {userProfile.name}</h3>
        <h3>Age: {userProfile.age}</h3>
        <h3>Occupation: {userProfile.occupation}</h3>
        <h3>Interests: {userProfile.droom}</h3>
        <h3>Dream Job: Software Developer</h3>
        <button>Edit</button>
        </main>
    )
}

export default Account