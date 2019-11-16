import React, { useState } from 'react';
import api from '../utils/api';
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  


function Signin(props) {

    const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth();
    }, []);
  
    const handleChange = event => {
      setAge(event.target.value);
    };


    const [userCredentials, setUserCredential] = useState({
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
            {/* <select name='type'>
                <option value='employee'>Job-Seeker</option>
                <option valer='empolyer'>Employer</option>
            </select> */}
      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChanges} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type
          </MenuItem>
          <MenuItem value='employee'>👨🏿‍💼 Employee</MenuItem>
          <MenuItem value='employer'>🏢 Employer</MenuItem>
        </Select>
        {/* <FormHelperText>Account Type</FormHelperText> */}
      </FormControl>

            <br />
            <input 
                type='email' 
                name='email' 
                placeholder='Email' 
                value={userCredentials.email} 
                onChange={handleChanges} 
            />
            <br/>
            <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                value={userCredentials.email} 
                onChange={handleChanges} 
            />
            <br/>
            <button type='submit'>Sign In</button> 
        </form>
        </> 
    )
}

export default Signin