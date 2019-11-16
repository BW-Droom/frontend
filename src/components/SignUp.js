import React, { useState } from 'react';
import api from '../utils/api';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
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
  
function SimpleSelect() {
  
}

function Signup(props){

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
            <h1>Sign Up Here</h1>
            {/* <FormControl className={classes.formControl}>
            <InputLabel>Select Account Type </InputLabel>
            <Select label='native select' >
                <option value='employee'>Job-Seeker</option>
                <option value='employer'>Employer</option>
            </Select>
            </FormControl> */}




      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
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
                type='text' 
                name='name' 
                placeholder='Name' 
                value={newUser.name}
                onChange={handleChanges}
            />
            <br />
            <input 
                type='email' 
                name='email' 
                placeholder='Email'
                value={newUser.email}
                onChange={handleChanges}                
            />
            <br />
            <input 
                type='text' 
                name='occupation' 
                placeholder='Current Job' 
                value={newUser.occupation}
                onChange={handleChanges}
            />
            <br />
            <input 
                type='text' 
                name='experience' 
                placeholder='Past Experience' 
                value={newUser.experience}
                onChange={handleChanges}
            />
            <br />
            <input 
                type='text' 
                name='droom' 
                placeholder='Dream Job' 
                value={newUser.droom}
                onChange={handleChanges}
            />
            <br />
            <input 
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