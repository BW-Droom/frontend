import React, { useState } from 'react';
import api from '../utils/api';
import Button from '@material-ui/core/Button'

function Signup(props){
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        occupation: '',
        experience: '',
        droom: '',
        password: '',
        type: ''

    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //created blank api call waiting for the backend to fill in
        api()
            .create("#", newUser)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push('#')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up Here</h1>
            <select >
                <option value='employee'>Job-Seeker</option>
                <option valer='empolyer'>Employer</option>
            </select>
            <br />
            <input 
                type='text' 
                name='name' 
                placeholder='Name' 
                value={newUser.name}
                onChange={handleChange}
            />
            <br />
            <input 
                type='email' 
                name='email' 
                placeholder='Email'
                value={newUser.email}
                onChange={handleChange}                
            />
            <br />
            <input 
                type='text' 
                name='occupation' 
                placeholder='Current Job' 
                value={newUser.occupation}
                onChange={handleChange}
            />
            <br />
            <input 
                type='text' 
                name='experience' 
                placeholder='Past Experience' 
                value={newUser.experience}
                onChange={handleChange}
            />
            <br />
            <input 
                type='text' 
                name='droom' 
                placeholder='Dream Job' 
                value={newUser.droom}
                onChange={handleChange}
            />
            <br />
            <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                value={newUser.password}
                onChange={handleChange}
            />
            <br />
            <Button variant="contained" color="primary" type='submit'>Sign Up</Button>
        </form>
        </>
    )
}

export default Signup