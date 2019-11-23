import React from 'react';
import ListingList from './Listings';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
          wideTextField:{
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 600,
          },
  }));
function ListingForm(props) {
    const classes = useStyles();
    const [type, setType] = React.useState('');
  
    const handleChange = event => {
      setType(event.target.value);
    };
    return (
        <>
        <form>
            <h1>Create a listing</h1>
            <ListingList />
            <TextField
                name='title'
                id="outlined-basic"
                className={classes.textField}
                label="Job Title"
                margin="normal"
                variant="outlined"
                placeholder='Job Title' 
            />
            <br />
            <TextField
                name='requirements'
                id="outlined-multiline-static"
                label="Job Requirements"
                multiline rows="4"
                defaultValue="Describe the requirements for this position."
                className={classes.wideTextField}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button type='submit' variant='contained' color='primary'>Submit</Button> 
            <br/>
        </form>
        </>
    )
}
export default ListingForm