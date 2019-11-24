import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from '../../store/actions/index';
import List from './EmployeeListing';

class EmployeeListView extends React.Component {
    componentDidMount() {
        this.props.fetchEmployee();
    }

    render() {

        if (this.props.isFetchingEmployees || !this.props.employees) {
            return <p>Loading Potential Employees...</p>;
          }
        return (
            <div>
                <List {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employees,
    isFetchingEmployees: state.isFetchingEmployees,
    error: state.error
});

export default connect(mapStateToProps, { fetchEmployee })(EmployeeListView);