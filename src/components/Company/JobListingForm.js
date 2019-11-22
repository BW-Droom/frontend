import React from "react";
import api from '../../utils/api';
import JobCard from "./JobCard";

 class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null
    };
  }

  componentDidMount() {
    this.fetchJob(this.props.match.params.id);
  }

  getDerivedStateFromProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchJob(newProps.match.params.id);
    }
  }

  fetchJob = id => {
    api()
      .get(`/api/company/2/jobs`)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err.response));
  };  

  updateJob = () => {
    this.props.history.push({
      pathname:`/update-job/${this.state.job.id}`,
      state: { job: this.state.job }
  })}

  render() {
    if (!this.state.job) {
      return <div>Loading Job information...</div>;
    }

    return (
      <div >
        <JobCard job={this.state.job} />        
        <button  onClick={this.updateJob}>
          Update
        </button>
      </div>
    );
  }
}

export default ListingForm;