import React, { useState } from 'react';
import api from '../utils/api';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
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




function Signup(props){

    const classes = useStyles();
    const [type, setType] = React.useState('');
    const handleChange = event => {
      setType(event.target.value);
    };

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        job: '',
        password: '',
        type: ''

    })

    const handleChanges = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmittee = (e) => {     
      api()
          .post("/auth/seeker/register")
          .then(res => {
            props.history.push('/seeker/account')            
          })
          .catch(err => {
              console.log(err)
          })
  }

    const handleSubmitter = (e) => {       
        api()
            .post("/auth/company/register")
            .then(res => {
              props.history.push('/company/listing')           
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        <form onSubmit={type === 'employee' ? handleSubmittee : handleSubmitter}>
            <h1>Sign Up</h1>

      {/* TODO: User has to select an account type for the signup button to be active */}

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
            label="Name"
            type='text'
            name='name'
            margin="normal"
            variant="outlined"
            value={newUser.name}
            onChange={handleChanges}
        />
          <br />
        <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Dream Job"
            type='text'
            name='job'
            margin="normal"
            variant="outlined"
            value={newUser.dreamJob}
            onChange={handleChanges}
        />
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
            value={newUser.email}
            onChange={handleChanges}                
        />
          <br />
          
        
        <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Password"
            margin="normal"
            variant="outlined"
            type='password' 
            name='password' 
            placeholder='Password' 
            value={newUser.password}
            onChange={handleChanges}
        />
        <br />

        {/* TODO: On click, the user will be redirected to either JobSeekerForm or JobListingForm */}
        <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
        </form>
        </>
    )
}

//test test

export default Signup