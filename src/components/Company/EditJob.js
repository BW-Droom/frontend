import React from "react";
import { editJob } from "../actions/index";
import { connect } from "react-redux";
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

class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job_title: "",
      description: "",      
      id: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.editJob(this.state.id, this.state);
    this.setState({
      job_title: "",
      description: "",      
      id: '',
    });
    window.location.reload(true)
  };

  
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler} >
          <TextField
            onChange={this.handleChange}
            name='job_title'
            id="outlined-basic"
            className={this.textField}
            label="Job Title"
            margin="normal"
            variant="outlined"
            placeholder='Job Title' 
            value={this.state.title}
          />
          <br/>
           <TextField 
            onChange={this.handleChange}
            name='id'
            id="outlined-basic"
            className={this.textField}
            label="Job Id"
            margin="normal"
            variant="outlined"
            placeholder='Job Title'             
            value={this.state.id}
             />
            <br/>
          <TextField
            onChange={this.handleChange}
            name='description'
            id="outlined-multiline-static"
            label="Job Requirements"
            multiline rows="4"                
            className={this.wideTextField}
            margin="normal"
            variant="outlined"
            value={this.state.description}
          />      
          <br/>    
         
          <Button type='submit' variant='contained' color='primary'>Edit Job</Button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { editJob }
)(EditJobForm);