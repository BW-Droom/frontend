import React, { useState } from 'react';
import api from '../utils/api';

function Signin(props) {
    const [userCredentials, setUserCredential] = useState({
        email: '',
        password: '',
        type: '',
    })

    const handleChange = (e) => {
        setUserCredential({
            ...userCredentials,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //created blank api call waiting for the backend to fill in
        api()
            .post("#", userCredentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push('#')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Sign In Here</h1>
            <select name='type'>
                <option value='employee'>Job-Seeker</option>
                <option valer='empolyer'>Employer</option>
            </select>
            <br />
            <input 
                type='email' 
                name='email' 
                placeholder='Email' 
                value={userCredentials.email} 
                onChange={handleChange} 
            />
            <br/>
            <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                value={userCredentials.password} 
                onChange={handleChange} 
            />
            <br/>
            <button type='submit'>Sign In</button> 
        </form>
        </> 
    )
}

export default Signin