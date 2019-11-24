import React from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../../store/actions/index';
import List from './Listings';

class ListView extends React.Component {
    componentDidMount() {
        this.props.getJobs();
    }

    render() {

        if (this.props.isFetchingJobs || !this.props.jobs) {
            return <p>Loading Jobs...</p>;
          }
        return (
            <div className='listingview'>
                <List {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs,
    isFetchingJobs: state.isFetchingJobs,
    error: state.error
});

export default connect(mapStateToProps, { getJobs })(ListView);