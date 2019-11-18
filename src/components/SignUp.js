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
    const [age, setAge] = React.useState('');//this useState serves no purpose other than the code breaks when its removed.  Its being used below with no effect.
  
  
    const handleChange = event => {
      setAge(event.target.value);
    };

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        occupation: '',
        experience: '',
        droom: '',
        password: '',
        type: ''

    })

    const handleChanges = (e) => {
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
            <h1>Sign Up</h1>

      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type
          </MenuItem>
          <MenuItem value='employee'><span role='img' aria-label="employee">👨🏿‍💼</span> Job Seeker</MenuItem>
          <MenuItem value='employer'><span role='img' aria-label="company">🏢</span> Employer</MenuItem>
        </Select>
        {/* <FormHelperText>Account Type</FormHelperText> */}
      </FormControl>

            <br />
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Name"
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
                label="Occupation"
                margin="normal"
                variant="outlined"
                type='text' 
                name='occupation' 
                placeholder='Current Job' 
                value={newUser.occupation}
                onChange={handleChanges}
            />
            <br />
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Experience"
                margin="normal"
                variant="outlined"
                type='text' 
                name='experience' 
                placeholder='Past Experience' 
                value={newUser.experience}
                onChange={handleChanges}
            />
            <br />
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Dream Job"
                margin="normal"
                variant="outlined"
                type='text' 
                name='droom' 
                placeholder='Dream Job' 
                value={newUser.droom}
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
            <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
        </form>
        </>
    )
}

export default Signup