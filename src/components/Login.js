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
    const [age, setAge] = React.useState('');//this useState serves no purpose other than the code breaks when its removed.  Its being used below with no effect.
  

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
            <h1>Sign In</h1>

      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChanges} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type
          </MenuItem>
          <MenuItem value='employee'>👨🏿‍💼 Job Seeker</MenuItem>
          <MenuItem value='employer'>🏢 Employer</MenuItem>
        </Select>
        {/* <FormHelperText>Account Type</FormHelperText> */}
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
                value={userCredentials.email} 
                onChange={handleChanges} 
            />
            <br/>
            <Button type='submit' variant='contained' color='primary'>Sign In</Button> 
        </form>
        </> 
    )
}

export default Signin