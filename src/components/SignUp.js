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




function Signup(props) {

    const classes = useStyles();
    const [type, setType] = useState('');
    const handleChange = event => {
      setType(event.target.value);
    };

    const [newCOM, setNewCOM] = useState({
        company_name: '',
        company_email: '',
        password: ''
    })

    const [newEMP, setNewEMP] = useState({
      name: '',
      email: '',
      dream_job: '',
      password: ''
    })

    const handleChanges = (e) => {
        setNewCOM({
          ...newCOM,
          [e.target.name]: e.target.value
        })
        setNewEMP({
          ...newEMP,
          [e.target.name]: e.target.value
        })
    }
    const handleSubmittee = (e) => {
      e.preventDefault();
      api()
          .post("/auth/seeker/register", newEMP)
          .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.history.push('/company/dashboard')
          })
          .catch(err => {
              console.log(err)
          })
        }

  const handleSubmitter = (e) => {
    e.preventDefault();
    api()
        .post("/auth/company/register", newCOM)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
          props.history.push('/company/dashboard')
        })
        .catch(err => {
            console.log(err)
        })
  }

  {if (type === 'employer') {
    return (
      <>
      <FormControl className={classes.formControl}>
        <Select value={type} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type
          </MenuItem>
          <MenuItem value='employee'><span role='img' aria-label="employee">👨🏿‍💼</span> Job Seeker</MenuItem>
          <MenuItem value='employer'><span role='img' aria-label="company">🏢</span> Employer</MenuItem>
        </Select>
      </FormControl>
      <form onSubmit={type === 'employee' ? handleSubmittee : handleSubmitter}>
      <h1>Sign Up</h1>
     <br />
     <TextField
     id="outlined-basic"
     className={classes.textField}
     label="Company Name"
     type='text'
     name='company_name'
     margin="normal"
     variant="outlined"
     value={newCOM.company_name}
     onChange={handleChanges}
     />
     <br />
     <TextField
     id="outlined-basic"
     className={classes.textField}
     label="Company Email"
     type='text'
     name='company_email'
     margin="normal"
     variant="outlined"
     value={newCOM.company_email}
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
     value={newCOM.password}
     onChange={handleChanges}
     />
     <br />
    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
    </form>
     </>)
   } else if (type === 'employee') {
     return (
      <>
      <FormControl className={classes.formControl}>
        <Select value={type} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type
          </MenuItem>
          <MenuItem value='employee'><span role='img' aria-label="employee">👨🏿‍💼</span> Job Seeker</MenuItem>
          <MenuItem value='employer'><span role='img' aria-label="company">🏢</span> Employer</MenuItem>
        </Select>
      </FormControl>
      <form onSubmit={type === 'employee' ? handleSubmittee : handleSubmitter}>
      <h1>Sign Up</h1>
      <br />
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Name"
        type='text'
        name='name'
        margin="normal"
        variant="outlined"
        value={newEMP.name}
        onChange={handleChanges}
      />
      <br />
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Dream Job"
        type='text'
        name='dream_job'
        margin="normal"
        variant="outlined"
        value={newEMP.dream_job}
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
          value={newEMP.email}
          onChange={handleChanges}                
          />
      <br />
      <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Employee Password"
          margin="normal"
          variant="outlined"
          type='password' 
          name='password' 
          placeholder='Password' 
          value={newEMP.password}
          onChange={handleChanges}
          />
      <br />
      <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
      </form>
      </>
   )
   } else {
     return (
       <>
        <FormControl className={classes.formControl}>
        <Select value={type} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Select Account Type</MenuItem>
          <MenuItem value='employee'><span role='img' aria-label="employee">👨🏿‍💼</span> Job Seeker</MenuItem>
          <MenuItem value='employer'><span role='img' aria-label="company">🏢</span> Employer</MenuItem>
        </Select>
        </FormControl>
    </>
      )
   } }
    
}

//test test

export default Signup