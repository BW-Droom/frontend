import React from "react";
import { addJob } from "../../store/actions/index";
import EditJobForm from './EditJob';
import { connect } from "react-redux";
import ListView from './showList'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
 


class ListingForm extends React.Component {
  constructor(props) {
    super(props.job);
    this.state = {
      job_title: "",
      description: "", 
         
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addJob(this.state);
    this.setState({
      job_title: "",
      description: "",   
    });
    window.location.reload(true)
  };
  
  render() {
    return (
      <div className='listing'>
      <div>
         <ListView/>
      </div>
      <div className='jobedit'>
        <EditJobForm />
        <form className='addform' onSubmit={this.submitHandler} >
          <TextField
            name='job_title'
            onChange={this.handleChange}
            id="outlined-basic"
            className={this.textField}
            label="Job Title"
            margin="normal"
            variant="outlined"
            placeholder='Job Title' 
            value={this.state.job_title}                      
          />
          <br/>         
          <TextField
            name='requirements'
            id="outlined-multiline-static"
            label="Job Requirements"
            multiline rows="4"                
            className={this.wideTextField}
            margin="normal"
            variant="outlined"            
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
            placeholder="Job Description"
            
          />
          <br/>          
          <Button type='submit' variant='contained' color='primary'>Add Job</Button>
        </form>
      </div>
     
      
      </div>
    );
  }
}

export default connect(
  null,
  { addJob }
)(ListingForm);