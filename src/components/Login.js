import React, { useState } from 'react';
import api from '../utils/api';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

        //TextField
        container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 300,
          },

  }));
  


function Signin(props) {

    const classes = useStyles();
    const [type, setType] = useState('');
  
    const handleChange = event => {
      setType(event.target.value);
    };


    const [userCredentials, setUserCredential] = useState({
        id: 9,
        email: '',
        password: '',
        type: '',
    })

    const handleChanges = (e) => {
        setUserCredential({
            ...userCredentials,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmittee = (e) => {
      e.preventDefault();
      api()
          .post("/auth/seeker/login", userCredentials)
          .then(res => {
            console.log(res)
            setUserCredential({
              ...userCredentials,
              id: res.data.seeker.id
            })
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('seeker', res.data)
            props.history.push('/seeker/dashboard')
          })
          .catch(err => {
              console.log(err)
          })
  }

    const handleSubmitter = (e) => {
        e.preventDefault();
        api()
            .post("/auth/company/login", userCredentials)
            .then(res => {
              setUserCredential({
                ...userCredentials,
                id: res.data.seeker.id
              })
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('company', res.data)
              props.history.push('/company/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <>
        <form onSubmit={type === 'employee' ? handleSubmittee : handleSubmitter}>
            <h1>Sign In</h1>

      <FormControl className={classes.formControl}>
        <Select value={type} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type
          </MenuItem>
          <MenuItem value='employee'><span role='img' aria-label="employee">👨🏿‍💼</span> Job Seeker</MenuItem>
          <MenuItem value='employer'><span role='img' aria-label="company">🏢</span> Employer</MenuItem>
        </Select>
      </FormControl>

            <br />
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Email"
                margin="normal"
                variant="outlined"
                type='email' 
                name='email' 
                placeholder='Email' 
                value={userCredentials.email} 
                onChange={handleChanges} 
            />
            <br/>
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Password"
                margin="normal"
                variant="outlined"
                type='password' 
                name='password' 
                placeholder='Password' 
                value={userCredentials.password} 
                onChange={handleChanges} 
            />
            <br/>
            <Button type='submit' variant='contained' color='primary'>Sign In</Button> 
        </form>
        </> 
    )
}

export default Signin