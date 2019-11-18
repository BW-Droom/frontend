import React, { useState } from 'react';
import api from '../utils/api';
import FormControl from '@material-ui/core/FormControl'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function Signin(props) {    
    const [age, setAge] = React.useState('');    
    const handleChange = event => {
      setAge(event.target.value);
    };

    const [userCredentials, setUserCredential] = useState({
        email: '',
        password: '',
        type: '',
        showPassword: false,
    })
    const handleClickShowPassword = () => {
      setUserCredential({ ...userCredentials, showPassword: !userCredentials.showPassword });
    };
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };

    const handleChanges = (e) => {
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
        <form onSubmit={handleSubmit} className='signinForm'>
            <h1>Sign In Here</h1>            
            <FormControl>
              <Select value={age} onChange={handleChange} displayEmpty >
                <MenuItem value="" disabled>
                  Select Account Type
                </MenuItem>
                <MenuItem value='employee'><span role='img' aria-label="employee">👨🏿‍💼</span>Employee</MenuItem>
                <MenuItem value='employer'><span role='img' aria-label="employee">🏢</span> Employer</MenuItem>
              </Select>              
            </FormControl>            
          
            <Grid className='email' container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField 
                id="input-with-icon-grid" 
                label="Email"
                value={userCredentials.email}
                onChange={handleChanges}
              />
            </Grid>
            </Grid>
            <FormControl >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={userCredentials.showPassword ? 'text' : 'password'}
            value={userCredentials.password}
            onChange={handleChanges}
            endAdornment={
              <InputAdornment position="end">       
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {userCredentials.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            <button type='submit'>Sign In</button> 
        </form>
        </> 
    )
}

export default Signin